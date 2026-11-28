import { chromium } from '@playwright/test'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'

// Screen widths the case screenshots are cut to, next to the full-size source <slug>.webp:
// phone captures show at 280px at most, desktop captures at about 520px.
const WIDTHS = [560, 600, 1200]
const QUALITY = 0.8

const casesUrl = new URL('../src/assets/cases/', import.meta.url)
const sources = readdirSync(casesUrl).filter((file) => /^[a-z-]+\.webp$/.test(file))

const browser = await chromium.launch()
const page = await browser.newPage()

for (const file of sources) {
  const data = readFileSync(new URL(file, casesUrl), 'base64')
  const slug = file.replace(/\.webp$/, '')

  const variants = await page.evaluate(
    async ({ data, quality, widths }) => {
      const image = new Image()
      image.src = `data:image/webp;base64,${data}`
      await image.decode()

      const phone = image.naturalHeight > image.naturalWidth
      const targets = widths.filter(
        (width) => width < image.naturalWidth && (phone ? width === 560 : width !== 560)
      )

      return targets.map((width) => {
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = Math.round((image.naturalHeight * width) / image.naturalWidth)

        const context = canvas.getContext('2d')!
        context.imageSmoothingQuality = 'high'
        context.drawImage(image, 0, 0, canvas.width, canvas.height)

        return { data: canvas.toDataURL('image/webp', quality).split(',')[1], width }
      })
    },
    { data, quality: QUALITY, widths: WIDTHS }
  )

  for (const variant of variants) {
    const output = Buffer.from(variant.data, 'base64')

    // A flat pixel-art capture can weigh less at full size than once resampled.
    if (output.length >= Buffer.byteLength(data, 'base64')) {
      console.log(`cases: ${slug}-${variant.width}.webp skipped, no lighter than ${file}`)
      continue
    }

    writeFileSync(new URL(`${slug}-${variant.width}.webp`, casesUrl), output)
    console.log(`cases: ${slug}-${variant.width}.webp — ${(output.length / 1024).toFixed(1)}KB`)
  }
}

await browser.close()

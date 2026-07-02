import { readFileSync, rmSync, writeFileSync } from 'node:fs'

const serverEntry = new URL('../dist-server/entry-server.js', import.meta.url)
const { render } = await import(serverEntry.href)
const appHtml = await render()

const htmlPath = new URL('../dist/index.html', import.meta.url)
const html = readFileSync(htmlPath, 'utf8')

const marker = '<div id="app">'
if (!html.includes(marker)) throw new Error('prerender: #app marker not found in dist/index.html')

writeFileSync(htmlPath, html.replace(marker, marker + appHtml))

rmSync(new URL('../dist-server/', import.meta.url), { force: true, recursive: true })

console.log(`prerender: ${(appHtml.length / 1024).toFixed(1)}KB of markup injected`)

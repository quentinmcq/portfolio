import { onBeforeUnmount, onMounted, watch, type ShallowRef } from 'vue'

import { useTheme } from '@/composables/theme'

const RAMP = ' .:-=+*#%@'
const FONT_STACK = `'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace`

const PRESENCE = 0.92
const POINTER_GAIN = 0.55

const GAMMA = 1.55
const FREQ_X = 6
const FREQ_Y = 5
const FREQ_DIAG = 4
const FREQ_RING = 26
const DRIFT = 0.18

const SIGMA = 0.13
const POINTER_REST = 0.18
const POINTER_MAX = 0.5
const POINTER_SPIKE = 0.06

const ALPHA_MIN = 0.05
const ALPHA_MAX = 0.5
const EMBER_FROM = 0.55

const MAX_CELLS = 12000
const TARGET_FPS = 30
const STATIC_T = 7.3

type Rgb = [number, number, number]

export function useAsciiBackdrop(canvasRef: Readonly<ShallowRef<HTMLCanvasElement | null>>) {
  const { theme } = useTheme()

  let ctx: CanvasRenderingContext2D | null = null
  let host: HTMLElement | null = null

  let cols = 0
  let rows = 0
  let cellW = 0
  let cellH = 0
  let fontSize = 16

  let nx = new Float32Array(0)
  let ny = new Float32Array(0)
  let dx2 = new Float32Array(0)
  let dy2 = new Float32Array(0)
  let colWave = new Float32Array(0)
  let rowWave = new Float32Array(0)

  const colors: string[] = []

  let px = 0.5
  let py = 0.5
  let tx = 0.5
  let ty = 0.5
  let energy = 0
  let inside = false

  let reduced = false
  let running = false
  let rafId = 0
  let lastRender = 0
  let interval = 1000 / TARGET_FPS
  let onscreen = true
  let visible = true

  let resizeObs: ResizeObserver | null = null
  let interObs: IntersectionObserver | null = null
  let mqReduce: MediaQueryList | null = null

  const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t
  const smoothstep = (e0: number, e1: number, x: number) => {
    const t = clamp01((x - e0) / (e1 - e0))
    return t * t * (3 - 2 * t)
  }

  function resolveRgb(value: string): Rgb {
    const probe = document.createElement('span')
    probe.style.cssText = `position:absolute;left:-9999px;color:${value}`
    document.body.appendChild(probe)
    const parts = getComputedStyle(probe).color.match(/-?\d+(?:\.\d+)?/g)
    document.body.removeChild(probe)
    if (!parts || parts.length < 3) return [245, 241, 232]
    return [Number(parts[0]), Number(parts[1]), Number(parts[2])]
  }

  function buildColors() {
    const fg = resolveRgb('var(--fg)')
    const ac = resolveRgb('var(--accent)')
    const last = RAMP.length - 1
    for (let i = 0; i <= last; i++) {
      const ti = i / last
      const a = lerp(ALPHA_MIN, ALPHA_MAX, Math.pow(ti, 1.25))
      const mix = smoothstep(EMBER_FROM, 1, ti)
      const r = Math.round(lerp(fg[0], ac[0], mix))
      const g = Math.round(lerp(fg[1], ac[1], mix))
      const b = Math.round(lerp(fg[2], ac[2], mix))
      colors[i] = `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`
    }
  }

  function measure() {
    const canvas = canvasRef.value
    if (!canvas || !ctx) return
    const rect = canvas.getBoundingClientRect()
    const w = Math.max(1, rect.width)
    const h = Math.max(1, rect.height)

    const small = window.innerWidth < 768
    interval = 1000 / (small ? 24 : TARGET_FPS)

    fontSize = small ? 18 : 16
    cellW = fontSize * 0.6
    cellH = fontSize * 1.05
    let c = Math.ceil(w / cellW)
    let r = Math.ceil(h / cellH)
    if (c * r > MAX_CELLS) {
      const k = Math.sqrt((c * r) / MAX_CELLS)
      fontSize *= k
      cellW = fontSize * 0.6
      cellH = fontSize * 1.05
      c = Math.ceil(w / cellW)
      r = Math.ceil(h / cellH)
    }
    cols = c
    rows = r

    const dpr = Math.min(2, window.devicePixelRatio || 1)
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)

    nx = new Float32Array(cols)
    dx2 = new Float32Array(cols)
    colWave = new Float32Array(cols)
    for (let x = 0; x < cols; x++) {
      const v = (x + 0.5) / cols
      nx[x] = v
      dx2[x] = (v - 0.5) * (v - 0.5)
    }
    ny = new Float32Array(rows)
    dy2 = new Float32Array(rows)
    rowWave = new Float32Array(rows)
    for (let y = 0; y < rows; y++) {
      const v = (y + 0.5) / rows
      ny[y] = v
      dy2[y] = (v - 0.5) * (v - 0.5)
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.textBaseline = 'top'
    ctx.font = `${fontSize}px ${FONT_STACK}`
  }

  function draw(t: number) {
    if (!ctx) return
    const sx = t * DRIFT

    for (let x = 0; x < cols; x++) colWave[x] = Math.sin(nx[x] * FREQ_X + sx * 0.6)
    for (let y = 0; y < rows; y++) rowWave[y] = Math.sin(ny[y] * FREQ_Y - sx * 0.5)

    ctx.clearRect(0, 0, cols * cellW, rows * cellH)

    const active = energy > 0.012
    const inv2s2 = 1 / (2 * SIGMA * SIGMA)
    const reach = 3 * SIGMA
    const cMin = active ? Math.max(0, Math.floor((px - reach) * cols)) : 0
    const cMax = active ? Math.min(cols - 1, Math.ceil((px + reach) * cols)) : -1
    const rMin = active ? Math.max(0, Math.floor((py - reach) * rows)) : 0
    const rMax = active ? Math.min(rows - 1, Math.ceil((py + reach) * rows)) : -1

    const last = RAMP.length - 1
    let prev = -1
    for (let y = 0; y < rows; y++) {
      const yPx = y * cellH
      const nyy = ny[y]
      const rWave = rowWave[y]
      const dyy = dy2[y]
      const inRowBand = active && y >= rMin && y <= rMax
      for (let x = 0; x < cols; x++) {
        const v =
          colWave[x] +
          rWave +
          Math.sin((nx[x] + nyy) * FREQ_DIAG + sx * 0.3) +
          Math.sin((dx2[x] + dyy) * FREQ_RING - sx * 0.7)
        let val = Math.pow((v + 4) * 0.125, GAMMA) * PRESENCE

        if (inRowBand && x >= cMin && x <= cMax) {
          const ddx = nx[x] - px
          const ddy = nyy - py
          val += energy * Math.exp(-(ddx * ddx + ddy * ddy) * inv2s2) * POINTER_GAIN
        }

        let i = (val * RAMP.length) | 0
        if (i <= 0) continue
        if (i > last) i = last
        if (i !== prev) {
          ctx.fillStyle = colors[i]
          prev = i
        }
        ctx.fillText(RAMP[i], x * cellW, yPx)
      }
    }
  }

  function render(ts: number) {
    px += (tx - px) * 0.12
    py += (ty - py) * 0.12
    const rest = inside ? POINTER_REST : 0
    energy += (rest - energy) * 0.05
    draw(ts * 0.001)
  }

  function drawStatic() {
    energy = 0
    draw(STATIC_T)
  }

  function frame(ts: number) {
    if (!running) {
      rafId = 0
      return
    }
    rafId = requestAnimationFrame(frame)
    if (ts - lastRender < interval) return
    lastRender = ts
    render(ts)
  }

  function start() {
    if (running || reduced || !ctx) return
    running = true
    lastRender = 0
    rafId = requestAnimationFrame(frame)
  }

  function stop() {
    running = false
    if (rafId) {
      cancelAnimationFrame(rafId)
      rafId = 0
    }
  }

  function evaluate() {
    if (reduced) return
    if (onscreen && visible) start()
    else stop()
  }

  function onPointerMove(e: PointerEvent) {
    if (!host) return
    const rect = host.getBoundingClientRect()
    tx = (e.clientX - rect.left) / rect.width
    ty = (e.clientY - rect.top) / rect.height
    inside = true
    energy = Math.min(POINTER_MAX, energy + POINTER_SPIKE)
  }

  function onPointerLeave() {
    inside = false
  }

  function onVisibility() {
    visible = !document.hidden
    evaluate()
  }

  function onReduceChange() {
    reduced = !!mqReduce?.matches
    if (reduced) {
      stop()
      drawStatic()
    } else {
      evaluate()
    }
  }

  watch(theme, () => {
    buildColors()
    if (reduced) drawStatic()
  })

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return
    ctx = canvas.getContext('2d')
    if (!ctx) return
    host = canvas.parentElement

    mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    reduced = mqReduce.matches

    measure()
    buildColors()

    host?.addEventListener('pointermove', onPointerMove, { passive: true })
    host?.addEventListener('pointerleave', onPointerLeave, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    mqReduce.addEventListener('change', onReduceChange)

    resizeObs = new ResizeObserver(() => {
      measure()
      if (reduced) drawStatic()
    })
    resizeObs.observe(canvas)

    interObs = new IntersectionObserver(
      (entries) => {
        onscreen = entries[0]?.isIntersecting ?? true
        evaluate()
      },
      { threshold: 0 }
    )
    interObs.observe(canvas)

    void document.fonts?.ready.then(() => {
      if (reduced) drawStatic()
    })

    if (reduced) drawStatic()
    else evaluate()
  })

  onBeforeUnmount(() => {
    stop()
    resizeObs?.disconnect()
    interObs?.disconnect()
    document.removeEventListener('visibilitychange', onVisibility)
    mqReduce?.removeEventListener('change', onReduceChange)
    host?.removeEventListener('pointermove', onPointerMove)
    host?.removeEventListener('pointerleave', onPointerLeave)
  })
}

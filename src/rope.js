import Shared from './shared'
import Config from './config'

const DELAY = 50

export function Rope(x0, y0, x1, y1, deep, amp, size, alpha, speed) {
  return {
    x0,
    y0,
    x1,
    y1,
    cx0: x0 + (x1 - x0) / 2, 
    cx: x0 + (x1 - x0) / 2,
    cy: y0 + deep,
    speed,
    size,
    deep,
    alpha,
    amp,
    t: 0,
    delay: DELAY
  }
}

export function draw(r) {
  const c = Shared.ctx
  c.strokeStyle = Config.ropeColor
  c.globalAlpha = r.alpha
  c.lineWidth = r.size
  c.beginPath()
  c.moveTo(r.x0, r.y0)
  c.quadraticCurveTo(r.cx, r.cy, r.x1, r.y1)
  c.stroke()
  c.globalAlpha = 1
}

export function update(r) {
  const t = performance.now()
  if (!r.delay) {
    r.cx += (r.speed * ((t - (r.t || t)) / 100))
    if (r.cx < r.cx0 - r.amp || r.cx > r.cx0 + r.amp) (r.speed *= -1) > 0 && (r.delay = DELAY)
  } else r.delay--
  r.t = t
}
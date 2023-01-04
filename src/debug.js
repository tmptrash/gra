import Shared from './shared'
import Config from './config'
import { topLeft, topRight, height } from './sprite'
import { getMousePos } from './utils'

export function Debug(objs) {
  const d = { pos: {}, objs }
  window.addEventListener('mousemove', e => d.pos = getMousePos(Shared.ctx.canvas, e), false)
  return d
}

export function draw(debug) {
  const s = debug.objs[1].o.sprite
  const [x0, y0] = topLeft(s)
  const [x1,  _] = topRight(s)
  const h = height(s)
  Shared.ctx.fillText(`mouse ${debug.pos.x || 0}:${debug.pos.y || 0}  hero ${Math.floor(x0)}:${Math.floor(y0)}; ${Math.floor(x1)}:${Math.floor(y0 + h)}`, 220, 20)
}
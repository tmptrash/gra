import Shared from './shared'
import { topLeft, topRight, height } from './sprite'
import { getMousePos, int } from './utils'

export function Debug(objs) {
  const d = { pos: {}, objs }
  window.addEventListener('mousemove', e => d.pos = getMousePos(Shared.ctx.canvas, e), false)
  return d
}

export function draw(debug) {
  // TODO: remove absolute index
  const s = debug.objs[1].o.sprite
  const [x0, y0] = topLeft(s)
  const [x1,  _] = topRight(s)
  const h = height(s)
  Shared.ctx.fillText(`mouse ${debug.pos.x || 0}:${debug.pos.y || 0}  hero ${int(x0)}:${int(y0)}; ${int(x1)}:${int(y0 + h)}`, 200, 30)
}
import Shared from './shared'
import Config from './config'
import { getMousePos, int } from './utils'

export function Debug(objs) {
  const d = { pos: {}, objs }
  window.addEventListener('mousemove', e => d.pos = getMousePos(Shared.ctx.canvas, e), false)
  return d
}

export function draw(debug) {
  // TODO: remove absolute index
  const s = debug.objs[1].o.sprite
  const x = debug.pos.x || 0
  const y = debug.pos.y || 0
  const hx0 = int(s.x)
  const hy0 = int(s.y)
  const hx1 = int(s.x + s.width)
  const hy1 = int(s.y + s.height)
  const scrX = Shared.offsX / Config.width
  const scrY = Shared.offsY / Config.height
  Shared.ctx.fillText(`mouse ${x}:${y}  hero ${hx0}:${hy0}; ${hx1}:${hy1}  scr ${scrX}:${scrY}`, 200, 30)
}
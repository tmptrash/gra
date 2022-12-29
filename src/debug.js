import Shared from './shared'
import Config from './config'
import { left, right, up, down } from './sprite'
import { getMousePos } from './utils'

export function Debug() {
  const d = { pos: {} }
  window.addEventListener('mousemove', e => d.pos = getMousePos(Shared.ctx.canvas, e), false)
  return d
}

export function draw(debug) {
  if (!Config.debug) return
  const s = Shared.objs[1].o.sprite
  Shared.ctx.fillStyle = Config.frontColor
  Shared.ctx.font = Config.frontFont
  Shared.ctx.fillText(`x: ${debug.pos.x}, y: ${debug.pos.y}`, 100, 20)
  Shared.ctx.fillText(`l: ${left(s)}, u: ${up(s)}, r: ${right(s)}, d: ${down(s)}`, 250, 20)
}
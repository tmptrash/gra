import Shared from './shared'
import Config from './config'
import { getMousePos, int, findObjById } from './utils'

export function Debug() {
  const debug = {
    pos: {},
    hero: findObjById(Shared.objs, Config.heroId)
  }
  window.addEventListener('mousemove', e => debug.pos = getMousePos(Shared.ctx.canvas, e), false)
  return debug
}

export function draw(debug) {
  const s = debug.hero.sprite
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
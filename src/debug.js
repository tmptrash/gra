import Shared from './shared'
import Config from './config'
import { getMousePos, int, on } from './utils'

const CHECK_EVERY = 1000

export function Debug() {
  const debug = {
    pos: {},
    fTime: performance.now(),
    uTime: performance.now(),
    curFps: 0,
    curUps: 0
  }
  on(window, 'mousemove', e => debug.pos = getMousePos(Shared.ctx.canvas, e), false)
  return debug
}

export function draw(debug) {
  const s = Shared.hero && Shared.hero.sprite || {}
  const x = debug.pos.x || 0
  const y = debug.pos.y || 0
  const hx0 = int(s.x)
  const hy0 = int(s.y)
  const hx1 = int(s.x + s.width)
  const hy1 = int(s.y + s.height)
  const scrX = Shared.offsX / Config.width
  const scrY = Shared.offsY / Config.height
  const t = performance.now()

  if (t - debug.fTime > CHECK_EVERY) {
    Shared.fps = debug.curFps
    debug.curFps = 0
    debug.fTime = t
  }
  debug.curFps++

  Shared.ctx.font = Config.frontFont
  Shared.ctx.fillText(`fps: ${Shared.fps}   ups: ${Shared.ups}   mouse ${x}:${y}   hero ${hx0}:${hy0}, ${hx1}:${hy1}   scr ${scrX}:${scrY}`, 200, 22)
}

export function update(fps) {
  const t = performance.now()
  if (t - fps.uTime > CHECK_EVERY) {
    Shared.ups = fps.curUps
    fps.curUps = 0
    fps.uTime = t
  }

  fps.curUps++
}
import Shared from './shared'
import Config from './config'
import { mousePos, int, text } from './utils'
import { room } from './rooms'

const CHECK_EVERY = 3000

export function Debug() {
  const debug = {
    pos: {},
    fTime: performance.now(),
    curFps: 0,
    listeners: Array(1)
  }
  debug.listeners[0] = [ window, 'mousemove', e => debug.pos = mousePos(Shared.ctx.canvas, e) ]
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
  const roomX = Shared.offsX / Config.width
  const roomY = Shared.offsY / Config.height
  const t = performance.now()

  if (t - debug.fTime > CHECK_EVERY) {
    Shared.fps = (debug.curFps / (CHECK_EVERY / 1000)).toFixed()
    debug.curFps = 0
    debug.fTime = t
  }
  debug.curFps++

  Config.debug && text(`mouse ${x}:${y}   hero ${hx0}:${hy0}, ${hx1}:${hy1}   room ${roomX}:${roomY}, ${room()}`, ...Config.debugPos, Config.frontFont)
  text(`fps: ${Shared.fps}`, ...Config.fpsPos, Config.frontFont, Config.textColor)
}
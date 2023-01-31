import Config from './config'
import Shared from './shared'
import { UP, delObj } from './utils'

export function Text(msg, x, y, after, delay, once, id) {
  const text = {
    msg,
    x,
    y,
    after,
    delay,
    once,
    curX: x,
    curY: y,
    dir: UP,
    t: 0,
    startT: 0
  }

  if (once && Shared.showed[id]) return
  Shared.showed[id] = true
  
  return text
}

export function draw(t) {
  const time = performance.now()
  if (time - t.startT < t.after) return

  Shared.ctx.font = Config.textFont
  Shared.ctx.fillStyle = Config.textColor
  Shared.ctx.fillText(t.msg, t.curX, t.curY)
}

export function update(t) {
  const time = performance.now()
  t.t === 0 && (t.t = t.startT = time)
  // self destroy after delay
  if (time - (t.startT + t.after) > t.delay) {
    delObj(t)
    return
  }

  if (t.curY < t.y - Config.textDist) t.dir *= -1, t.curY = t.y - Config.textDist
  else if (t.curY > t.y + Config.textDist) t.dir *= -1, t.curY = t.y + Config.textDist
  let diff = (time - t.t) * Config.textSpeed * t.dir
  diff > Config.textDist && (diff = Config.textDist)
  t.curY += diff
  t.t = time
}
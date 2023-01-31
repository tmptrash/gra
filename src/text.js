import Config from './config'
import Shared from './shared'
import { UP, findObjIdx } from './utils'

export function Text(msg, x, y, deviation, speed, after, delay, once, id) {
  const text = {
    msg,
    x,
    y,
    deviation,
    speed,
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
    const idx = findObjIdx(Shared.objs, t)
    idx !== -1 && Shared.objs.splice(idx, 1)

    return
  }

  if (t.curY < t.y - t.deviation) t.dir *= -1, t.curY = t.y - t.deviation
  else if (t.curY > t.y + t.deviation) t.dir *= -1, t.curY = t.y + t.deviation
  let diff = (time - t.t) * t.speed * t.dir
  diff > t.deviation && (diff = t.deviation)
  t.curY += diff
  t.t = time
}

function showed() {

}
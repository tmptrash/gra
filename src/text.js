import Config from './config'
import Shared from './shared'
import { UP, findObjIdx } from './utils'

export function Text(msg, x, y, deviation, speed, after, delay, once) {
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

  return text
}

export function draw(t) {
  const time = performance.now()
  // self destroy if a text should be showed once
  if (t.once) {
    const idx = findObjIdx(Shared.objs, t)
    if (idx !== -1 && Shared.showed[Shared.objs[idx].id] === true) {
      Shared.objs.splice(idx, 1)
      return
    }
  }
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
    if (idx !== -1) {
      Shared.showed[Shared.objs[idx].id] = true
      Shared.objs.splice(idx, 1)
    }

    return
  }

  Math.abs(t.curY - t.y) > t.deviation && (t.dir *= -1)
  let diff = (time - t.t) * t.speed * t.dir
  diff > t.deviation && (diff = t.deviation)
  t.curY += diff
  t.t = time
}

function showed() {

}
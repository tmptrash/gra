import Shared from './shared'
import Config from './config'

export function Countdown(delay, x, y) {
  return {
    t: performance.now(),
    delay,
    x,
    y
  }
}

export function draw(timer) {
  const t = (timer.delay - (performance.now() - timer.t)) / 1000
  if (t > 0) {
    Shared.ctx.fillStyle = Config.frontColor
    Shared.ctx.font = Config.frontFont
    Shared.ctx.fillText(`${t.toFixed()}s`, timer.x, timer.y)
  }
}
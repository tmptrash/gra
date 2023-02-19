import Config, { Msgs } from './config'
import Shared from './shared'
import { text } from './utils'

export function Timer() {
  return {
    t: 0,
    x: Config.width / 2 - 30,
    y: 20,
    font: Config.frontFont,
    col: Config.textColor,
    val: 0
  }
}

export function draw(t) {
  !t.t && (t.t = performance.now())
  const secs = ((performance.now() - t.t) / 1000).toFixed()
  if (Shared.stop) t.val = t.val || secs
  else text(Msgs.time(t.val || secs), t.x, t.y, t.font, t.col)
}
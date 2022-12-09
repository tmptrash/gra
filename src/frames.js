import Config from './config'

export function Frames(width, amount) {
  return {
    frame: 0,
    width,
    amount,
    time: Date.now()
  }
}

export function update(frames) {
  const t = Date.now()
  if (t - frames.time > Config.frameSpeed) {
    ++frames.frame >= frames.amount && (frames.frame = 0)
    frames.time = t
  }
}
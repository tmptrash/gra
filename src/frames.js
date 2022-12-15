import Config from './config'

export function Frames(width, amount = 1, timeout = 180) {
  return {
    frame: 0,
    width,
    amount,
    timeout,
    time: Date.now()
  }
}

export function update(frames) {
  const t = Date.now()
  if (t - frames.time > frames.timeout) {
    ++frames.frame >= frames.amount && (frames.frame = 0)
    frames.time = t
  }
}
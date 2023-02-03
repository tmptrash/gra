import Shared from './shared'

export function Frames(width, amount = 1, timeout = 180, run = true, speed = 1) {
  return {
    frame: 0,
    width,
    amount,
    timeout,
    time: Date.now(),
    run,
    speed
  }
}

export function update(frames) {
  if (!frames.run) return
  const t = Date.now()
  if (t - frames.time > frames.timeout / frames.speed) {
    frames.frame = (frames.frame + 1) % frames.amount
    frames.time = t
  }
}

export function stop(frames) {
  frames.frame = 0
  frames.run = false
}
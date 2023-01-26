export function Frames(width, amount = 1, timeout = 180, run = true) {
  return {
    frame: 0,
    width,
    amount,
    timeout,
    time: Date.now(),
    run
  }
}

export function update(frames) {
  if (!frames.run) return
  const t = Date.now()
  if (t - frames.time > frames.timeout) {
    frames.frame = (frames.frame + 1) % frames.amount
    frames.time = t
  }
}
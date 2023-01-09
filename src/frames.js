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
    frames.frame = (frames.frame + 1) % frames.amount
    frames.time = t
  }
}
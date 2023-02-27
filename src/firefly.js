import Config from './config'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { xyBarrier } from './barriers'

const SPEED = 3
const HALF_SPEED = SPEED / 2
const MAX_AMOUNT = 20
const DELAY = 40

export function Firefly() {
  const ff = {
    sprites: [],
    t: []
  }
  const w = Config.width - 64
  const h = Config.height - 64
  const cfg = Config.firefly
  for (let i = 0; i < MAX_AMOUNT; i++) {
    cfg[0].x = Math.random() * w + 32
    cfg[0].y = Math.random() * h + 32
    if (!xyBarrier(cfg[0].x, cfg[0].y)) ff.sprites.push(Sprite(...cfg))
    ff.t[i] = 0
  }

  return ff
}

export function draw(f) {
  f.sprites.forEach(s => drawSprite(s))
}

export function update(f) {
  const w = Config.width - 64
  const h = Config.height - 64
  const t = performance.now()
  f.sprites.forEach((s, i) => {
    if (t - f.t[i] > DELAY) {
      let x = s.x + Math.random() * SPEED - HALF_SPEED
      let y = s.y + Math.random() * SPEED - HALF_SPEED
      if (x < 32) x = 32
      else if (x > w) x = w
      if (y < 32) y = 32
      else if (y > h) y = h
      if (!xyBarrier(x, y)) s.x = x, s.y = y
      updateSprite(s)
      f.t[i] = t
    }
  })
}
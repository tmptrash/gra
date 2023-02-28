import Config from './config'
import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { xyBarrier } from './barriers'
import { on } from './utils'

const MAX_AMOUNT = Config.fireflyAmount
const LEVELS = Config.vSprites * Config.spriteSize / Config.height
const DIRS = new Int8Array([0,1,  1,1,  1,0,  1,-1,  0,-1,  -1,-1,  -1,0,  -1,1])

export function Firefly() {
  const ff = {
    sprites: Array(MAX_AMOUNT),
    hidden: Array(MAX_AMOUNT),
    dirs: new Float32Array(MAX_AMOUNT * 2),
    t: new Float64Array(MAX_AMOUNT)
  }
  const w = Config.width - 64
  const h = Config.height - 64
  const cfg = Config.firefly
  for (let i = 0; i < MAX_AMOUNT; i++) {
    cfg[0].x = Math.random() * w + 32
    cfg[0].y = Math.random() * h + 32
    ff.sprites[i] = Sprite(...cfg)
    ff.hidden[i] = xyBarrier(cfg[0].x, cfg[0].y)
    ff.dirs[i] = Math.floor(Math.random() * 8)
    ff.t[i] = 0
  }
  on(Shared.obs, 'change-room', onChangeRoom.bind(null, ff))

  return ff
}

export function draw(f) {
  const roomY = Shared.offsY / Config.height
  const amount = MAX_AMOUNT / (LEVELS - roomY)
  const sprites = f.sprites
  for (let i = 0; i < amount; i++) !f.hidden[i] && drawSprite(sprites[i])
}

export function update(f) {
  const w = Config.width - 64
  const h = Config.height - 64
  const t = performance.now()
  f.sprites.forEach((s, i) => {
    if (t - f.t[i] > Config.objTickMs) {
      let [d, x, y] = newXY(f.dirs[i], s.x, s.y)
      if (x < 32) x = 32
      else if (x > w) x = w
      if (y < 32) y = 32
      else if (y > h) y = h
      if (!xyBarrier(x, y)) s.x = x, s.y = y, f.dirs[i] = d
      updateSprite(s)
      f.t[i] = t
    }
  })
}

function onChangeRoom(f) {
  const w = Config.width - 64
  const h = Config.height - 64
  f.sprites.forEach((s, i) => {
    s.x = Math.random() * w + 32
    s.y = Math.random() * h + 32
    f.hidden[i] = xyBarrier(s.x, s.y)
  })
}

function newXY(d, x, y) {
  const dir = Math.floor(Math.random() * 3) - 1
  d += dir
  if (d < 0) d = 7
  else if (d > 7) d = 0
  return [d, x + DIRS[d * 2] * Config.fireflySpeed, y + DIRS[d * 2 + 1] * Config.fireflySpeed]
}
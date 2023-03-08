import Config from './config'
import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { xyBlock } from './blocks'
import { on, rnd, inWater } from './utils'

const MAX_AMOUNT = Config.fireflyAmount
const LEVELS = Config.vSprites * Config.spriteSize / Config.height
const DIRS = new Int8Array([0,1,  1,1,  1,0,  1,-1,  0,-1,  -1,-1,  -1,0,  -1,1])
const CFGS = [Config.fireflySmall, Config.fireflyMid, Config.fireflyBig]
const W = Config.width - 64
const H = Config.height - 64
const SW = Config.spriteSize

export function Firefly() {
  const f = {
    sprites: Array(MAX_AMOUNT),
    hidden: Array(MAX_AMOUNT),
    dirs: new Uint8Array(MAX_AMOUNT),
    t: new Float64Array(MAX_AMOUNT),
    inited: false
  }
  on(Shared.obs, 'change-room', onChangeRoom.bind(null, f))
  return f
}

export function draw(f) {
  if (!f.inited) return
  const roomY = Shared.offsY / Config.height
  const amount = MAX_AMOUNT / (LEVELS - roomY)
  const sprites = f.sprites
  for (let i = 0; i < amount; i++) !f.hidden[i] && drawSprite(sprites[i])
}

export function update(f) {
  if (!f.inited) { init(f), f.inited = true; return }
  const t = performance.now()
  f.sprites.forEach((s, i) => {
    if (t - f.t[i] > Config.objTickMs) {
      let [d, x, y] = newXY(f.dirs[i], s.x, s.y)
      if (x < SW) x = SW
      else if (x > W) x = W
      if (y < SW) y = SW
      else if (y > H) y = H
      f.dirs[i] = d
      if (!xyBlock(x, y) && !inWater(x + s.width, y + s.height)) s.x = x, s.y = y
      updateSprite(s)
      f.t[i] = t
    }
  })
}

function onChangeRoom(f) {
  f.sprites.forEach((s, i) => (f.hidden[i] = xyBlock((s.x = rnd(W, SW)), (s.y = rnd(H, SW)))))
}

function newXY(d, x, y) {
  d += rnd(3, -1)
  if (d < 0) d = 7
  else if (d > 7) d = 0
  return [d, x + DIRS[d * 2] * Config.fireflySpeed, y + DIRS[d * 2 + 1] * Config.fireflySpeed]
}

function init(f) {
  for (let i = 0; i < MAX_AMOUNT; i++) {
    const cfg = CFGS[rnd(3)]
    cfg[0].x = rnd(W, SW)
    cfg[0].y = rnd(H, SW)
    f.sprites[i] = Sprite(...cfg)
    f.hidden[i] = xyBlock(cfg[0].x, cfg[0].y)
    f.dirs[i] = rnd(8)
    f.t[i] = 0
  }
}
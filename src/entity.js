import Shared from './shared'
import Config from './config'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { findObjIdx } from './utils'
import { scrOffs } from './screens'

export function Entiry(spriteCfg, scr) {
  const entity = {
    picked: false,
    scr,
    sprite: Sprite(...spriteCfg),
    stepTime: performance.now()
  }

  entity.sprite.img = entity.sprite.imgs.idle
  return entity
}

export function draw(entity) {
  drawSprite(entity.sprite)
}

export function update(e) {
  const s = Shared
  if (e.scr === scrOffs(s.offsX, s.offsY) && near(e.sprite.x, e.sprite.y, s.heroX, s.heroY)) {
    const sprite = Sprite({ x: 0, y: 0 }, e.sprite.img.img.src)
    sprite.width = e.sprite.img.frames.width
    s.picked.entities.push(sprite)
    const idx = findObjIdx(s.objs, e)
    idx !== -1 && s.objs.splice(idx, 1)
  }

  updateSprite(e.sprite)
}

function near(x, y, x1, y1) {
  return Math.abs(x - x1) < Config.spriteSize && Math.abs(y - y1) < Config.spriteSize
}
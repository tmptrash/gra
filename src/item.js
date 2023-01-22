import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { findObjIdx, touches } from './utils'

export function Item(spriteCfg, scr) {
  const item = {
    picked: false,
    scr,
    sprite: Sprite(...spriteCfg),
    stepTime: performance.now()
  }

  item.sprite.img = item.sprite.imgs.idle
  return item
}

export function draw(item) {
  drawSprite(item.sprite)
}

export function update(item) {
  const s = Shared
  if (touches(item.sprite, s.hero.sprite)) {
    const sprite = Sprite({ x: 0, y: 0 }, item.sprite.img.img.src)
    sprite.width = item.sprite.img.frames.width
    s.picked.items.push(sprite)
    const idx = findObjIdx(s.objs, item)
    idx !== -1 && s.objs.splice(idx, 1)
  }

  updateSprite(item.sprite)
}
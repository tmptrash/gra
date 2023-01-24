import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { findObjIdx, touches } from './utils'

export function Item(spriteCfg, sound, pickFn, scr) {
  const item = {
    picked: false,
    scr,
    sprite: Sprite(...spriteCfg),
    stepTime: performance.now(),
    sound: Shared.sounds[sound],
    pickFn
  }

  item.sprite.img = item.sprite.imgs.idle
  return item
}

export function draw(item) {
  drawSprite(item.sprite)
}

export function update(i) {
  touches(i.sprite, Shared.hero.sprite) && (i.pickFn ? i.pickFn(i, pick) : pick(i))
  updateSprite(i.sprite)
}

function pick(item, show = true) {
  const sprite = Sprite({ x: 0, y: 0 }, item.sprite.img.img.src)
  sprite.width = item.sprite.img.frames.width
  sprite.hidden = !show
  Shared.picked.items.push(sprite)
  const idx = findObjIdx(Shared.objs, item)
  idx !== -1 && Shared.objs.splice(idx, 1)
  item.sound.play()
}
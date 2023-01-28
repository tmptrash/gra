import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { findObjIdx, touches } from './utils'

export function Item(spriteCfg, sound, pickFn, room) {
  const item = {
    picked: false,
    room,
    sprite: Sprite(...spriteCfg),
    stepTime: performance.now(),
    sound: Shared.sounds[sound],
    pickFn,
    hidden: false
  }

  item.sprite.img = item.sprite.imgs.idle
  return item
}

export function draw(item) {
  drawSprite(item.sprite)
}

export function update(i) {
  if (touches(i.sprite, Shared.hero.sprite)) {
    i.pickFn ? i.pickFn(i, pick) : pick(i)
  }
  updateSprite(i.sprite)
}

function pick(item, show = true) {
  item.hidden = !show
  Shared.picked.items.push(item)
  const idx = findObjIdx(Shared.objs, item)
  idx !== -1 && Shared.objs.splice(idx, 1)
  item.sound.play()
}
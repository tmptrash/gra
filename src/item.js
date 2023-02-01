import Config from './config'
import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { delObj, touches, msg } from './utils'
import { create } from './creator'

export function Item(spriteCfg, sound, msg, pickFn, room) {
  const item = {
    picked: false,
    room,
    sprite: Sprite(...spriteCfg),
    stepTime: performance.now(),
    sound: Shared.sounds[sound],
    pickFn,
    hidden: false,
    msg
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
  delObj(item)
  Shared.objs.push(create('Text', {text: [msg(item.msg), 437, 300, 0, 3000, false, 0], id: 0}, item.room))
  item.sound.play()
}
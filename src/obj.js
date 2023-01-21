import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'

export function Obj(spriteCfg, speed) {
  const obj = {
    speed,
    sprite: Sprite(...spriteCfg),
    stepTime: performance.now()
  }

  obj.sprite.img = obj.sprite.imgs.idle
  return obj
}

export function draw(obj) {
  drawSprite(obj.sprite)
}

export function update(obj) {
  updateSprite(obj.sprite)
}
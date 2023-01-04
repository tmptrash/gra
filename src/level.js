// TODO: do we need this separate file?
import Config from './config'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'

export function Level() {
  const level = {
    sprite: Sprite(...Config.back, onLevelLoad)
  }

  return level
}

export function draw(level) {
  drawSprite(level.sprite)
}

export function update(level) {
  updateSprite(level.sprite)
}

function onLevelLoad(img) {
  Config.hSprites = img.width / Config.spriteSize
  Config.vSprites = img.height / Config.spriteSize
}

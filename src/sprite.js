import Shared from './shared'
import { Frames, update } from './frames'

export function Sprite(x, y, src, frames = 1) {
  const sprite = {
    x,
    y,
    width: 0,
    height: 0,
    img: new Image(),
    frames: null
  }
  sprite.img.onload = onLoad.bind(null, sprite, frames)
  sprite.img.src = src
  return sprite
}

export function draw(sprite) {
  if (!sprite.img || !sprite.frames) return

  Shared.ctx.drawImage(
    sprite.img,
    sprite.frames.frame * sprite.frames.width,
    0,
    sprite.frames.width,
    sprite.height,
    sprite.x,
    sprite.y,
    sprite.frames.width,
    sprite.height
  )

  update(sprite.frames)
}

function onLoad(sprite, frames) {
  sprite.width = sprite.img.width
  sprite.height = sprite.img.height
  sprite.frames = Frames(sprite.width / frames, frames)
}
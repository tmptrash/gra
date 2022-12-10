import Shared from './shared'
import { Frames, update } from './frames'

export function Sprite(x, y, imgs) {
  const sprite = {
    x,
    y,
    img: null,
    imgs: {}
  }
  loadImgs(sprite, typeof imgs === 'string' ? {idle: [imgs]} : imgs)
  sprite.imgs.idle && setImg(sprite, 'idle')
  return sprite
}

export function draw(sprite) {
  const img = sprite.img
  if (!img || !img.img || !img.frames) return

  Shared.ctx.drawImage(
    img.img,
    img.frames.frame * img.frames.width,
    0,
    img.frames.width,
    img.height,
    sprite.x,
    sprite.y,
    img.frames.width,
    img.height
  )

  update(sprite.img.frames)
}

export function setImg(sprite, img) {
  sprite.img = sprite.imgs[img]
}

function loadImgs(sprite, imgs) {
  for(let i in imgs) {
    const img = sprite.imgs[i] = {
      width: 0,
      height: 0,
      img: new Image(),
      frames: null
    }
    img.img.onload = onLoad.bind(null, img, imgs[i][1])
    img.img.src = imgs[i][0]
  }
}

function onLoad(img, frames = 1) {
  img.width = img.img.width
  img.height = img.img.height
  img.frames = Frames(img.width / frames, frames)
}
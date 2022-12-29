import Shared from './shared'
import { Frames, update as updateFrames } from './frames'

export function Sprite(x, y, cut, imgs, onLoad = () => {}) {
  const sprite = {
    x,
    y,
    cut,
    img: null,
    imgs: {},
    onLoad
  }
  loadImgs(sprite, typeof imgs === 'string' ? {idle: [imgs]} : imgs)
  sprite.imgs.idle && setImg(sprite, 'idle')
  return sprite
}

export function draw(sprite) {
  const img = sprite.img
  if (!img || !img.img || !img.frames) return

  sprite.pixelated && (Shared.ctx.imageSmoothingEnabled = false)
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
  sprite.pixelated && (Shared.ctx.imageSmoothingEnabled = true)
}

export const right = (sprite) => sprite.x + sprite.cut[0] + sprite.cut[2]

export const left = (sprite) => sprite.x + sprite.cut[0]

export const up = (sprite) => sprite.y + sprite.cut[1]

export const down = (sprite) => sprite.y + sprite.cut[1] + sprite.cut[3]

export function update(sprite) {
  const img = sprite.img
  if (!img || !img.img || !img.frames) return
  updateFrames(sprite.img.frames)
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
    img.img.onload = onLoad.bind(null, sprite, img, imgs[i][1], imgs[i][2])
    img.img.src = imgs[i][0]
  }
}

function onLoad(sprite, img, frames, timeout) {
  img.width = img.img.width
  img.height = img.img.height
  img.frames = Frames(img.width / (frames || 1), frames, timeout)
  sprite.onLoad(img)
}
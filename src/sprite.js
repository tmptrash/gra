import Shared from './shared'
import { Frames, update as updateFrames } from './frames'

export function Sprite({ x, y, width = undefined, height = undefined}, imgs, onLoad = () => {}) {
  const sprite = {
    x,
    y,
    width,
    height,
    img: null,
    imgs: {},
    onLoad
  }
  loadImgs(sprite, typeof imgs === 'string' ? {idle: [imgs]} : imgs)
  // TODO: "idle" should not be here. Should be outside
  sprite.imgs.idle && setImg(sprite, 'idle')
  return sprite
}

export function draw(sprite, offsX = 0, offsY = 0) {
  const img = sprite.img
  if (!img || !img.img || !img.frames) return

  Shared.ctx.drawImage(
    img.img,
    offsX + img.frames.frame * img.frames.width,
    offsY,
    sprite.width,
    sprite.height,
    sprite.x,
    sprite.y,
    sprite.width,
    sprite.height
  )
}

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
    Shared.images++
  }
}

function onLoad(sprite, img, frames, timeout) {
  img.width = img.img.width
  img.height = img.img.height
  img.frames = Frames(img.width / (frames || 1), frames, timeout)
  !sprite.width && (sprite.width = img.frames.width)
  !sprite.height && (sprite.height = img.height)
  Shared.images--
  sprite.onLoad(img)
}
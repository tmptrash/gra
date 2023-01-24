import Config from './config'
import { draw as drawSprite } from './sprite'

export function Picked() {
  const picked = {
    items: []
  }

  return picked
}

export function draw(picked) {
  let x = Config.width - 2
  picked.items.forEach(i => {
    i.sprite.img.frames.frame = 0
    i.sprite.width = i.sprite.img.frames.width
    if (!i.hidden) {
      x -= (i.sprite.width + 5)
      i.sprite.x = x
      i.sprite.y = 10
      drawSprite(i.sprite)
    }
  })
}
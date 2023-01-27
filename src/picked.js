import Config from './config'
import { draw as drawSprite, stop } from './sprite'

export function Picked() {
  const picked = {
    items: []
  }

  return picked
}

export function draw(picked) {
  let x = Config.width - 2
  picked.items.forEach(i => {
    stop(i.sprite)
    if (!i.hidden) {
      x -= (i.sprite.width + 5)
      i.sprite.x = x
      i.sprite.y = 10
      drawSprite(i.sprite)
    }
  })
}
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
  picked.items.forEach(s => {
    !s.hidden && (x -= s.width + 5)
    s.x = x
    s.y = 10
    drawSprite(s)
  })
}
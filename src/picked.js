import Config from './config'
import { draw as drawSprite } from './sprite'

export function Picked() {
  const picked = {
    entities: []
  }

  return picked
}

export function draw(picked) {
  let x = Config.width - Config.spriteSize
  picked.entities.forEach(s => {
    s.y = 10
    s.x = x
    x -= s.width + 2
    drawSprite(s)
  })
}
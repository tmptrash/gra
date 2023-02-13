import Config from './config'
import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite} from './sprite'
import { touch } from './utils' 

export function Door() {
  return {
    sprite: Sprite(...Config.door)
  }
}

export function draw(d) {
  const frames = d.sprite.img.frames
  if (!frames) return
  // end of level
  if (frames.frame >= frames.amount - 1) Shared.stop = Config.gameCompletedId
  drawSprite(d.sprite)
}

export function update(d) {
  if (Shared.stop) return
  if (Shared.hero.key && touch(d.sprite, Shared.hero.sprite)) {
    d.sprite.img.frames.run = true
  }
  updateSprite(d.sprite)
}
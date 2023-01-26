import Config from './config'
import Shared from './shared'
import { Sprite, draw as drawSprite, update as updateSprite} from './sprite'
import { scrOffs } from './screens'
import { touches } from './utils' 

export function Door() {
  const door = {
    sprite: Sprite(...Config.door),
    scr: Config.doorScr
  }

  return door
}

export function draw(d) {
  const frames = d.sprite.img.frames
  if (!frames || scrOffs(Shared.offsX, Shared.offsY) !== d.scr) return
  // end of level
  if (frames.frame >= frames.amount - 1) Shared.stop = Config.gameCompletedId
  drawSprite(d.sprite)
}

export function update(d) {
  if (Shared.stop || scrOffs(Shared.offsX, Shared.offsY) !== d.scr) return
  if (Shared.hero.key && touches(d.sprite, Shared.hero.sprite)) {
    d.sprite.img.frames.run = true
  }
  updateSprite(d.sprite)
}
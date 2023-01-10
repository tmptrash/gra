import Shared from './shared'
import Config from './config'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'

export function Back() {
  const back = {
    sprite: Sprite(...Config.l1Back),
    hero: findObjById(Shared.objs, Config.heroId)
  }

  return back
}

export function draw(back) {
  back.sprite.x = (Config.width - back.hero.sprite.x) / 8
  back.sprite.y = (Config.height - back.hero.sprite.y) / 8
  drawSprite(back.sprite, Shared.offsX, Shared.offsY, 2)
}

export function update(back) {
  updateSprite(back.sprite)
}
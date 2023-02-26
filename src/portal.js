import Shared from './shared'
import Config, { Msgs } from './config'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { touch } from './utils'
import { room, updateObjs } from './rooms'
import { create } from './creator'
import { play } from './sounds'

export function Portal(spriteCfg, sound) {
  return {
    sprite: Sprite(...spriteCfg),
    sound
  }
}

export function draw(portal) {
  drawSprite(portal.sprite)
}

export function update(p) {
  if (touch(Shared.hero.sprite, p.sprite, 50)) {
    const x = Shared.offsX
    const y = Shared.offsY
    Shared.offsX = Config.width * 6
    Shared.offsY = 0
    const r = room()
    Shared.hero.sprite.x = 10
    Shared.hero.sprite.y = 100
    updateObjs(room(x, y), room())
    Shared.objs.push(create('Text', {text: [Msgs.foundTeleport, 450, 300, 0, 3000, false, 0], id: 0}, r))
    play(Config.sounds.portal)
    return
  }
  updateSprite(p.sprite)
}
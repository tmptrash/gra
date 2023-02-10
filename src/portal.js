import Shared from './shared'
import Config from './config'
import { Sprite, draw as drawSprite, update as updateSprite } from './sprite'
import { touches } from './utils'
import { roomOffs, updateObjs } from './rooms'
import { create } from './creator'

export function Portal(spriteCfg, room) {
  const portal = {
    sprite: Sprite(...spriteCfg),
    room
  }

  return portal
}

export function draw(portal) {
  drawSprite(portal.sprite)
}

export function update(p) {
  if (touches(Shared.hero.sprite, p.sprite, 50)) {
    const x = Shared.offsX
    const y = Shared.offsY
    Shared.offsX = Config.width * 6
    Shared.offsY = 0
    Shared.hero.sprite.x = 10
    Shared.hero.sprite.y = 100
    updateObjs(roomOffs(x, y), roomOffs(Shared.offsX, Shared.offsY))
    Shared.objs.push(create('Text', {text: [Config.msgs.foundTeleport, 450, 300, 0, 3000, false, 0], id: 0}, p.room))
    return
  }
  updateSprite(p.sprite)
}
import Shared from './shared'
import Config from './config'
import { create } from './creator'

export function updateObjs(fromRoom, toRoom) {
  const objs = Shared.objs
  for (let i = 0; i < objs.length; i++) objs[i].room === fromRoom && (objs.splice(i, 1), i--)
  
  const enemies = Config.rooms.enemies[toRoom]
  enemies && enemies.forEach(cfg => objs.push(create('Enemy', cfg, toRoom)))

  const items = Config.rooms.items[toRoom]
  items && items.forEach(cfg => !isPicked(cfg[0], toRoom) && objs.push(create('Item', cfg, toRoom)))

  const scripts = Config.rooms.scripts[toRoom]
  scripts && scripts.forEach(cfg => {
    const s = create(cfg[0], cfg[1], toRoom)
    if (s.o) {
      if (cfg[1].pos) objs.splice(cfg[1].pos, 0, s)
      else objs.push(s)
    }
  })
}

export function room(offsX = Shared.offsX, offsY = Shared.offsY) {
  const roomX = offsX / Config.width
  const roomY = offsY / Config.height
  return roomX + roomY * (Config.hSprites * Config.spriteSize / Config.width)
}

function isPicked(itemCfg, room) {
  return Shared.picked.items.findIndex(i => {
    return i.sprite.img.img.src === itemCfg[1].idle[0] && i.room === room
  }) !== -1
}
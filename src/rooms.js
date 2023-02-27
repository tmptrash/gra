import Shared from './shared'
import Config from './config'
import { create } from './creator'
import { findObjIdxById, fire } from './utils'

export function updateObjs(fromRoom, toRoom) {
  const objs = Shared.objs
  for (let i = 0; i < objs.length; i++) objs[i].room === fromRoom && (objs.splice(i, 1), i--)
  
  const enemies = Config.rooms.enemies[toRoom]
  enemies && enemies.forEach(cfg => objs.splice(Config.enemiesPos, 0, create('Enemy', cfg, toRoom)))

  const items = Config.rooms.items[toRoom]
  items && items.forEach(cfg => !isPicked(cfg[0], toRoom) && objs.splice(Config.itemsPos, 0, create('Item', cfg, toRoom)))

  const scripts = Config.rooms.scripts[toRoom]
  scripts && scripts.forEach(cfg => {
    const s = create(cfg[0], cfg[1], toRoom)
    if (s.o) {
      if (cfg[1].pos === 'end') objs.push(s)
      else if (cfg[1].pos) objs.splice(cfg[1].pos, 0, s)
      else if(cfg[1].after) addAfter(cfg[1].after, s)
      else objs.splice(Config.scriptsPos, 0, s)
    }
  })

  fire('change-room')
}

export function room(offsX = Shared.offsX, offsY = Shared.offsY) {
  const roomX = offsX / Config.width
  const roomY = offsY / Config.height
  return roomX + roomY * (Config.hSprites * Config.spriteSize / Config.width)
}

export function addAfter(id, obj) {
  const idx = findObjIdxById(id)
  if (idx !== -1) Shared.objs.splice(idx + 1, 0, obj)
  else Shared.objs.push(obj)
}

function isPicked(itemCfg, room) {
  return Shared.picked.items.findIndex(i => {
    return i.sprite.img.img.src === itemCfg[1].idle[0] && i.room === room
  }) !== -1
}
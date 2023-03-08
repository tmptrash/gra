import Shared from './shared'
import Config from './config'
import { create } from './creator'
import { findObjIdxById, idFrom, enemyId } from './utils'

export function updateObjs(fromRoom, toRoom) {
  const objs = Shared.objs
  for (let i = 0; i < objs.length; i++) objs[i].room === fromRoom && (objs.splice(i, 1), i--)
  
  const enemies = Config.rooms.enemies[toRoom]
  enemies && enemies.forEach(cfg => !Shared.killed[enemyId(cfg, toRoom)] && objs.splice(Config.enemiesPos, 0, create('Enemy', cfg, toRoom)))

  const items = Config.rooms.items[toRoom]
  items && items.forEach(cfg => !pickedInRoom(cfg[0], toRoom) && objs.splice(Config.itemsPos, 0, create('Item', cfg, toRoom)))

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

function pickedInRoom(itemCfg, room) {
  const id = idFrom(room, itemCfg[0].x, itemCfg[0].y)
  return Shared.picked.findIndex(i => i.id === id) !== -1
}
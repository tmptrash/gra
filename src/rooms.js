import Shared from './shared'
import Config from './config'
import { create } from './creator'
import { idFrom, enemyId, addObj, delObj } from './utils'

export function updateObjs(fromRoom, toRoom) {
  const objs = Shared.objs
  for (let i = 0; i < objs.length; i++) objs[i].room === fromRoom && (delObj(objs[i].o), i--)

  const enemies = Config.rooms.enemies[toRoom]
  const killed = Shared.killed
  enemies && enemies.forEach(cfg => !killed[enemyId(cfg, toRoom)] && addObj(create('Enemy', cfg, toRoom), cfg[4] || Config.enemiesPos))

  const items = Config.rooms.items[toRoom]
  items && items.forEach(cfg => !pickedInRoom(cfg[0], toRoom) && addObj(create('Item', cfg, toRoom), Config.itemsPos))

  const scripts = Config.rooms.scripts[toRoom]
  scripts && scripts.forEach(cfg => addObj(create(cfg[0], cfg[1], toRoom), cfg[1].pos || cfg[1].after || Config.scriptsPos))
}

export function room(offsX = Shared.offsX, offsY = Shared.offsY) {
  const roomX = offsX / Config.width
  const roomY = offsY / Config.height
  return roomX + roomY * (Config.hSprites * Config.spriteSize / Config.width)
}

function pickedInRoom(itemCfg, room) {
  const id = idFrom(room, itemCfg[0].x, itemCfg[0].y)
  return Shared.picked.findIndex(i => i.id === id) !== -1
}
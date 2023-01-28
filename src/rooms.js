import Shared from './shared'
import Config from './config'
import { create } from './creator'

export function updateObjs(fromScr, toScr) {
  const objs = Shared.objs
  for (let i = 0; i < objs.length; i++) objs[i].scr === fromScr && (objs.splice(i, 1), i--)
  
  const enemies = Config.rooms.enemies[toScr]
  enemies && enemies.forEach(cfg => objs.push(create('Enemy', cfg, toScr)))

  const items = Config.rooms.items[toScr]
  items && items.forEach(cfg => !isPicked(cfg[0], toScr) && objs.push(create('Item', cfg, toScr)))

  const scripts = Config.rooms.scripts[toScr]
  scripts && scripts.forEach(cfg => {
    cfg[1].pos && objs.splice(cfg[1].pos, 0, create(cfg[0], cfg[1])) || objs.push(create(cfg[0], cfg[1]))
  })
}

export function scrOffs(offsX, offsY) {
  const scrX = offsX / Config.width
  const scrY = offsY / Config.height
  return scrX + scrY * (Config.hSprites * Config.spriteSize / Config.width)
}

function isPicked(itemCfg, scr) {
  return Shared.picked.items.findIndex(i => {
    return i.sprite.img.img.src === itemCfg[1].idle[0] && i.scr === scr
  }) !== -1
}
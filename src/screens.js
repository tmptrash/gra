import Shared from './shared'
import Config from './config'
import { Enemy, draw as drawEnemy, update as updateEnemy } from './enemy'
import { Item, draw as drawEntity, update as updateEntity } from './item'

export function updateObjs(fromScr, toScr) {
  const objs = Shared.objs
  for (let i = 0; i < objs.length; i++) objs[i].scr === fromScr && (objs.splice(i, 1), i--)
  
  const scrs = Config.screens.enemies[toScr]
  scrs && scrs.forEach(cfg => objs.push({
    draw: drawEnemy, update: updateEnemy, o: Enemy(...cfg, toScr), scr: toScr
  }))

  const items = Config.screens.items[toScr]
  items && items.forEach(cfg => !isPicked(cfg[0]) && objs.push({
      draw: drawEntity, update: updateEntity, o: Item(...cfg, toScr), scr: toScr
  }))
}

export function scrOffs(offsX, offsY) {
  const scrX = offsX / Config.width
  const scrY = offsY / Config.height
  return scrX + scrY * (Config.hSprites * Config.spriteSize / Config.width)
}

function isPicked(itemCfg) {
  return Shared.picked.items.findIndex(s => s.img.img.src === itemCfg[1].idle[0]) !== -1
}
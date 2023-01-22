import Shared from './shared'
import Config from './config'
import { Looper, draw as drawLooper, update as updateLooper } from './enemy'
import { Entiry, draw as drawEntity, update as updateEntity } from './item'

export function updateObjs(fromScr, toScr) {
  const objs = Shared.objs
  for (let i = 0; i < objs.length; i++) objs[i].scr === fromScr && (objs.splice(i, 1), i--)
  
  const scrs = Config.screens.enemies[toScr]
  scrs && scrs.forEach(cfg => objs.push({
    draw: drawLooper, update: updateLooper, o: Looper(...cfg), scr: toScr
  }))

  const items = Config.screens.items[toScr]
  items && items.forEach(cfg => !isPicked(cfg) && objs.push({
      draw: drawEntity, update: updateEntity, o: Entiry(cfg, toScr), scr: toScr
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
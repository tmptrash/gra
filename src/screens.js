import Shared from './shared'
import Config from './config'
import { Looper, draw as drawLooper, update as updateLooper } from './looper'
import { Obj, draw as drawObj, update as updateObj } from './obj'

export function updateObjs(fromScr, toScr) {
  const objs = Shared.objs
  for (let i = 0; i < objs.length; i++) objs[i].scr === fromScr && (objs.splice(i, 1), i--)
  
  const scrs = Config.screens.loopers[toScr]
  scrs && scrs.forEach(cfg => objs.push({
    draw: drawLooper, update: updateLooper, o: Looper(...cfg), scr: toScr
  }))

  const objects = Config.screens.objs[toScr]
  objects && objects.forEach(cfg => objs.push({
    draw: drawObj, update: updateObj, o: Obj(...cfg), scr: toScr
  }))
}

export function scrOffs(offsX, offsY) {
  const scrX = offsX / Config.width
  const scrY = offsY / Config.height
  return scrX + scrY * (Config.hSprites * Config.spriteSize / Config.width)
}
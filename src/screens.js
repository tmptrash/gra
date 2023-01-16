import Shared from './shared'
import Config from './config'
import { Looper, draw as drawLooper, update as updateLooper } from './looper'

export function updateObjs(fromScr, toScr) {
  const objs = Shared.objs
  for (let i = 0; i < objs.length; i++) objs[i].scr === fromScr && (objs.splice(i, 1), i--)
  
  const scrs = Config.screens[toScr]
  scrs && scrs.forEach(cfg => objs.push({
    draw: drawLooper, update: updateLooper, o: Looper(...cfg), scr: toScr
  }))
}

export function scrOffs(offsX, offsY) {
  const scrX = offsX / Config.width
  const scrY = offsY / Config.height
  return scrX + scrY * (Config.hSprites * Config.spriteSize / Config.width)
}
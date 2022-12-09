import Config from './config'
import Shared from './shared'
import { isArr } from './utils'

export function Scene(...objs) {
  Shared.ctx = document.getElementById(Config.canvasId).getContext('2d')
  Shared.ctx.canvas.width = Config.width
  Shared.ctx.canvas.height = Config.height
  return {
    objs: objs.map(o => isArr(o) ? o[0](...o.splice(1)) : o())
  }
}

export function draw(scene) {
  scene.objs.forEach(o => o.draw(o))
}
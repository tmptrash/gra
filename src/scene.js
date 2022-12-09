import Config from './config'
import Shared from './shared'

export class Scene {
  constructor(...objects) {
    Shared.ctx = document.getElementById(Config.canvasId).getContext('2d')
    Shared.ctx.canvas.width = Config.width
    Shared.ctx.canvas.height = Config.height
    this.objects = objects.map(o => Array.isArray(o) ? new (o[0])(...o.splice(1)) : new o())
  }

  draw() {
    this.objects.forEach(o => o.draw())
  }
}
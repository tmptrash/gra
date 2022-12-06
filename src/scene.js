import Config from './config'

export class Scene {
  constructor(...objects) {
    this.c = document.getElementById(Config.canvasId).getContext('2d')
    this.map = {}
    this.objects = objects.map(o => {
      const cl = new o(this.c)
      this.map[o.name] = cl
      return cl
    });
    this.c.canvas.width = Config.width
    this.c.canvas.height = Config.height
  }

  draw() {
    this.c.fillStyle = Config.backColor
    this.c.fillRect(0, 0, canvas.width, canvas.height)

    this.objects.forEach(o => o.draw())
  }

  object(name) {
    return this.map[name]
  }
}
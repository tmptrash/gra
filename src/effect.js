import Shared from './shared'
import Config from './config'

export function Effect() {
  return {
  }
}

export function draw(e) {
  const id = Shared.ctx.getImageData(0, 0, Config.width, Config.height)
  const d = id.data
  const l = d.length

  for (let i = 0; i < l; i += 4) {
    d[i + 3] = 50
  }

  Shared.ctx.putImageData(id, 0, 0)
}
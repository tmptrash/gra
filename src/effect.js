import Shared from './shared'
import Config from './config'

export function Effect() {
  return {
  }
}

export function draw() {
  const id = Shared.ctx.getImageData(0, 0, Config.width, Config.height)
  const d = id.data
  const l = d.length
  const w = Config.width
  const s = Shared.hero.sprite

  for (let i = 0; i < l; i += 4) {
    const offs = i / 4
    const y = Math.floor(offs / w)
    const x = offs % w
    const dist = Math.sqrt((x - s.x)**2 + (y - s.y)**2)
    
    d[i + 3] = dist > 400 ? 0 : 255 - (dist / 1.568627)
  }

  Shared.ctx.putImageData(id, 0, 0)
}
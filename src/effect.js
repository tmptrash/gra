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
    let c
    
    if (dist > 400) {
      d[i] = d[i + 1] = d[i + 2] = 0
    } else if (dist > 300) {
      const c = dist - 290
      d[i] /= c
      d[i + 1] /= c
      d[i + 2] /= c
    } else {
      const c = dist / 32
      d[i] /= c
      d[i + 1] /= c
      d[i + 2] /= c
    }
  }

  Shared.ctx.putImageData(id, 0, 0)
}
import { Flashlight, draw as drawFl, update as updateFl } from './flashlight'
import { Firefly, draw as drawFf, update as updateFf } from './firefly'
import { ons } from './utils'

export function Effects() {
  const effects = {
    fl: Flashlight(),
    ff: Firefly()
  }
  ons(effects.fl.listeners)
  ons(effects.ff.listeners)

  return effects
}

export function draw(e) {
  drawFl(e.fl)
  drawFf(e.ff)
}

export function update(e) {
  updateFl(e.fl)
  updateFf(e.ff)
}
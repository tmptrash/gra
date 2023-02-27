import { Flashlight, draw as drawFl, update as updateFl } from './flashlight'
import { Firefly, draw as drawFf, update as updateFf } from './firefly'

export function Effects() {
  return {
    fl: Flashlight(),
    ff: Firefly()
  }
}

export function draw(e) {
  drawFl(e.fl)
  drawFf(e.ff)
}

export function update(e) {
  updateFl(e.fl)
  updateFf(e.ff)
}
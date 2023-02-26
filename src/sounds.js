import Config from './config'
import Shared from './shared'
import { ASSETS } from './assets'

export function Sounds() {
  const sounds = Config.sounds

  for (let s in sounds) {
    if (ASSETS[sounds[s]]) {
      sounds[s] = ASSETS[sounds[s]]
    } else throw Error(`Sound not found: ${s}`)
  }

  return sounds
}

export function play(a) {
  a.volume = Shared.volume
  a.play()
}

export function stop(a) {
  a.pause()
}
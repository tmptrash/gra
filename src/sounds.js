import Config from './config'
import Shared from './shared'
import { ASSETS } from './assets'

export function Sounds() {
  const sounds = Config.sounds

  for (let s in sounds) {
    if (ASSETS[sounds[s]]) {
      sounds[s] = ASSETS[sounds[s]]
    } else {
      const a = new Audio()
      Shared.assets++
      a.oncanplaythrough = () => Shared.assets--
      a.src = sounds[s]
      sounds[s] = a
    }
  }

  return sounds
}
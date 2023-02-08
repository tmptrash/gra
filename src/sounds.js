import Config from './config'
import Shared from './shared'
import { ASSETS } from './assets'

export function Sounds() {
  const sounds = Config.sounds

  for (let s in sounds) {
    if (ASSETS[sounds[s]]) {
      sounds[s] = ASSETS[sounds[s]]
      updatePlay(sounds[s])
    } else {
      const a = new Audio()
      updatePlay(a)
      Shared.assets++
      a.oncanplaythrough = () => Shared.assets--
      a.src = sounds[s]
      sounds[s] = a
    }
  }

  return sounds
}

function updatePlay(a) {
  a.oldPlay = a.play
  a.play = () => {
    a.volume = Shared.volume
    a.oldPlay()
  }
}
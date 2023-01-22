import Config from './config'
import Shared from './shared'

export function Sounds() {
  const sounds = Config.sounds

  for (let s in sounds) {
    const a = new Audio()
    Shared.assets++
    a.oncanplaythrough = () => Shared.assets--
    a.src = sounds[s]
    sounds[s] = a
  }

  return sounds
}
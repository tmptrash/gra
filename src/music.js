import Config from './config'
import { on } from './utils'

export function Music() {
  const music = {
    list: [...Config.music],
    el: document.getElementById(Config.audioId),
    idx: 0
  }
  on(music.el, 'ended', play.bind(null, music))

  return music
}

export function play(music) {
  music.el.src = music.list[music.idx++]
  music.el.volume = Config.musicVolume
  music.el.play()
  music.idx >= music.list.length && (music.idx = 0)
}

export function stop(music) {
  music.el.pause()
}
import Config from './config'
import Shared from './shared'
import { on, show } from './utils'

export function Music() {
  const music = {
    list: [...Config.music],
    el: document.getElementById(Config.audioId),
    vol: document.querySelector(Config.volumeQuery),
    volLabel: document.querySelector(Config.volumeLabelQuery),
    idx: 0
  }
  on(music.el, 'ended', play.bind(null, music))
  on(music.vol, 'change', onVolume.bind(null, music))
  Shared.volume = Config.musicVolume

  return music
}

export function play(music) {
  music.el.src = music.list[music.idx++]
  music.el.volume = Shared.volume
  music.el.play()
  music.idx >= music.list.length && (music.idx = 0)
  show(music.vol)
  show(music.volLabel)
}

export function stop(music) {
  music.el.pause()
}

function onVolume(music, e) {
  Shared.volume = music.el.volume = e.target.value / 100
}
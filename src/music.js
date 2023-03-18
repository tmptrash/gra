import Config from './config'
import Shared from './shared'
import { ons, el } from './utils'

export function Music() {
  const music = {
    list: [...Config.music],
    el: el(`#${Config.audioId}`),
    vol: el(Config.volumeQuery),
    volLabel: el(Config.volumeLabelQuery),
    idx: 0,
    listeners: Array(2)
  }
  music.listeners[0] = [music.el, 'ended', play.bind(null, music)]
  music.listeners[1] = [music.vol, 'change', onVolume.bind(null, music)]
  ons(music.listeners)
  Shared.volume = Config.musicVolume

  return music
}

export function play(music) {
  if (!music.el.paused) return
  music.el.src = music.list[music.idx++]
  music.el.volume = Shared.volume
  music.el.play()
  music.idx >= music.list.length && (music.idx = 0)
}

export function stop(music) {
  music.el.pause()
}

function onVolume(music, e) {
  Shared.volume = music.el.volume = e.target.value / 100
}
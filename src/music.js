import Config from './config'

export function Music() {
  const music = {
    list: [...Config.music],
    el: document.getElementById(Config.audioId),
    idx: 0
  }
  music.el.addEventListener('ended', play.bind(null, music))

  return music
}

export function play(music) {
  music.el.src = music.list[music.idx++]
  music.el.play()
  music.idx >= music.list.length && (music.idx = 0)
}
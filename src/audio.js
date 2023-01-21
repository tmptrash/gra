import Config from './config'

export function Audio() {
  const audio = {
    list: [...Config.tracks],
    el: document.getElementById(Config.audioId),
    idx: 0
  }
  audio.el.addEventListener('ended', play.bind(null, audio))

  return audio
}

export function play(audio) {
  audio.el.src = audio.list[audio.idx++]
  audio.el.play()
  audio.idx >= audio.list.length && (audio.idx = 0)
}
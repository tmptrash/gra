import Config from './config'

const SAVE_FIELDS = ['leftKey', 'rightKey', 'jumpKey', 'fireKey', 'useKey']

export function save() {
  const o = {}
  SAVE_FIELDS.forEach(f => o[f] = Config[f])
  localStorage.cfg = JSON.stringify(o)
}

export function load() {
  try {
    const cfg = JSON.parse(localStorage.cfg)
    cfg && SAVE_FIELDS.forEach(f => cfg[f] !== undefined && (Config[f] = cfg[f]))
  } catch {}
}
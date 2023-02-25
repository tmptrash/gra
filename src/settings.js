import Config, { Msgs } from './config'
import { el, on, fire, hide, show } from './utils'
import { save } from './store'

const KEYS = ['jump', 'left', 'right', 'fire', 'use']

export function Settings() {
  const s = {}
  iter(f => s[`${f}El`] = el(Config[`${f}Query`]))               // find fields in a DOM
  iter(f => s[`${f}El`].value = Config[`${f}Key`])               // init fields from Config values
  iter(f => on(s[`${f}El`], 'keydown', onKeydown.bind(null, s))) // bind fields handlers
  clearErr()
  return s
}

function iter(cb) {
  KEYS.forEach(f => cb(f))
}

function onKeydown(s, e) {
  e.preventDefault()
  e.target.value = e.code
  !updateErr(s) && (updateCfg(s), save(), fire('rebind'))
}

function clearErr() {
  iter(f => hide(el(`div.${f}`)).textContent = '')
}

function uniqueKey(s, key, v) {
  let u = true
  iter(f => { if (key !== f && s[`${f}El`].value === v) { u = false; return }})
  return u
}

function updateErr(s) {
  let err = false
  iter(f => {
    const uniq = uniqueKey(s, f, s[`${f}El`].value)
    if (uniq) hide(el(`div.${f}`))
    else show(el(`div.${f}`)).textContent = Msgs.alreadyUsed, err = true
  })
  return err
}

function updateCfg(s) {
  iter(f => Config[`${f}Key`] = s[`${f}El`].value)
}
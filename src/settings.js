import Config, { Msgs } from './config'
import { el, on, fire, hide, show, checkbox } from './utils'
import { saveCfg } from './store'

const KEYS = ['jump', 'left', 'right', 'fire', 'use', 'fullscreen']

export function Settings() {
  const s = {}
  iter(f => s[`${f}El`] = el(Config[`${f}Query`]))  // find fields in a DOM
  initFields(s)                                     // init fields from Config values
  addHandlers(s)                                    // bind fields handlers
  clearErr(s)
  return s
}

function iter(cb) {
  KEYS.forEach(f => cb(f))
}

function onKeydown(s, e) {
  e.preventDefault()
  e.target.value = e.code
  !updateErr(s) && (updateCfg(s), saveCfg(), fire('rebind'))
}

function onCheck(f, e) {
  fire('cfg', {f, v: Config[f] = e.target.checked})
  saveCfg()
}

function clearErr(s) {
  iter(f => type(s, f) === 'text' && (hide(el(`div.${f}`)).textContent = ''))
}

function uniqueKey(s, key, v) {
  let u = true
  iter(f => { if (key !== f && s[`${f}El`].value === v) { u = false; return }})
  return u
}

function updateErr(s) {
  let err = false
  iter(f => {
    if (type(s, f) === 'text') {
      const uniq = uniqueKey(s, f, s[`${f}El`].value)
      if (uniq) hide(el(`div.${f}`))
      else show(el(`div.${f}`)).textContent = Msgs.alreadyUsed, err = true
    }
  })
  return err
}

function updateCfg(s) {
  iter(f => fire('cfg', {f, v: Config[`${f}Key`] = s[`${f}El`].value}))
}

function cfg(s, f) {
  switch(type(s, f)) {
    case 'checkbox':
      return Config[f]
    case 'text':
      return Config[f + 'Key']
  }
  return null
}

function initFields(s) {
  iter(f => {
    switch(type(s, f)) {
      case 'checkbox':
        s[`${f}El`].checked = cfg(s, f)
        break
      case 'text':
        s[`${f}El`].value = cfg(s, f)
        break
    }
  })
}

function addHandlers(s) {
  iter(f => {
    switch(type(s, f)) {
      case 'checkbox':
        on(s[`${f}El`], 'click', onCheck.bind(null, f))
        break
      case 'text':
        on(s[`${f}El`], 'keydown', onKeydown.bind(null, s))
        break
    }
  })
}

function type(s, f) {
  return s[`${f}El`].type
}
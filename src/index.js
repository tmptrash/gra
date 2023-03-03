loadCfg() // load settings from personal storage
import './css/index.css'
import './css/settings.css'
import './css/checkbox.css'
import './css/help.css'
import { Nav, start } from './nav'
import { Game } from './game'
import { Settings } from './settings'
import { loadCfg } from './store'

const game = Game()
const settings = Settings()
const nav = Nav(game, settings)
nav && start(nav)
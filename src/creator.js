import { Door, draw as drawDoor, update as updateDoor } from './door'
import { Item, draw as drawItem, update as updateItem } from './item'
import { Enemy, draw as drawEnemy, update as updateEnemy } from './enemy'

export function create(ctor, cfg, room) {
  switch (ctor) {
    case 'Door' : return { draw: drawDoor, update: updateDoor, o: Door(), room }
    case 'Item' : return { draw: drawItem, update: updateItem, o: Item(...cfg, room), room }
    case 'Enemy': return { draw: drawEnemy, update: updateEnemy, o: Enemy(...cfg), room }
  }

  return null
}
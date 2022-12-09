/**
 * {
 *   keydown: { key: handlerFn, ... },
 *   ...
 * }
 */
export function bind(handlers) {
  for (const evt in handlers) {
    window.addEventListener(evt, e => handlers[evt] && handlers[evt][e.key] && handlers[evt][e.key]())
  }
}
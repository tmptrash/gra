export function isArr(v) {
  return Array.isArray(v)
}

export function int(n) {
  const i = Math.trunc(n)
  return n - i < .502 ? i : i + 1
}

export function getMousePos(canvas, evt) {
  const rect = canvas.getBoundingClientRect()
  return {
    x: Math.ceil(evt.clientX / document.body.style.zoom - rect.x),
    y: Math.ceil(evt.clientY / document.body.style.zoom - rect.y)
  }
}
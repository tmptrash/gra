export function isArr(v) {
  return Array.isArray(v)
}

export function getMousePos(canvas, evt) {
  const rect = canvas.getBoundingClientRect()
  return {
    x: Math.floor(evt.clientX / document.body.style.zoom - rect.x),
    y: Math.floor(evt.clientY / document.body.style.zoom - rect.y)
  }
}
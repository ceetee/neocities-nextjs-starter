import { MutableRefObject } from 'react'

export function lerp(a: number, b: number, t: number) {
  return (1 - t) * a + t * b
}

interface Vec2 {
  x: number;
  y: number;
}

export function calculateShadows(smoothedMouse: MutableRefObject<Vec2>, textP: MutableRefObject<Vec2>, mouse: Vec2, colors: string[], maxDistance: number) {
  // lerp the smoothed mouse values
  smoothedMouse.current.x = lerp(smoothedMouse.current.x, mouse.x, 0.1)
  smoothedMouse.current.y = lerp(smoothedMouse.current.y, mouse.y, 0.1)

  // get the angle between the mouse and the text
  const angle = Math.atan2(textP.current.y - smoothedMouse.current.y, textP.current.x - smoothedMouse.current.x)

  // get the distance between the mouse and the text
  const distanceX = smoothedMouse.current.x - textP.current.x
  const distanceY = smoothedMouse.current.y - textP.current.y
  let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
  const shadows: string[] = []

  // limit the distance to 75
  if (maxDistance && distance > maxDistance) {
    distance = maxDistance
  }

  // create a shadow for each color
  for (let i = 0; i < colors.length; i++) {
    let shadowDistance = (i + 1) * (distance / colors.length) // Offset each shadow by 10px
    const shadowX = Math.cos(angle) * shadowDistance
    const shadowY = Math.sin(angle) * shadowDistance
    shadows.push(`${shadowX}px ${shadowY}px 0 ${colors[i]}`)
  }

  return shadows
}
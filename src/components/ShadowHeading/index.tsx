'use client'
import { useEffect, useRef, ReactNode } from 'react'
import { useMouse } from '@uidotdev/usehooks'

import { token } from '@/styled-system/tokens'
import { calculateShadows } from '@/utils'

interface HeadingProps {
  children: ReactNode,
  className?: string,
}

const colors = [
  token('colors.red.400'),
  token('colors.orange.400'),
  token('colors.yellow.400'),
  token('colors.green.400'),
  token('colors.blue.400'),
  token('colors.indigo.400'),
  token('colors.violet.400'),
]

export const ShadowHeading = (props: HeadingProps) => {
  const textP = useRef({ x: 0, y: 0 })
  const ref = useRef<HTMLHeadingElement>(null)
  const [mouse] = useMouse()
  const smoothedMouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (ref.current) {
      // get the center of the text
      textP.current = {
        x: ref.current.offsetLeft + ref.current.offsetWidth / 2,
        y: ref.current.offsetTop + ref.current.offsetHeight / 2,
      }

      const shadows = calculateShadows(smoothedMouse, textP, mouse, colors, 75)

      ref.current.style.textShadow = shadows.join(', ')
    }
  }, [mouse])

  const textX = 'a'
  return <h2 ref={ref} {...props} />
}
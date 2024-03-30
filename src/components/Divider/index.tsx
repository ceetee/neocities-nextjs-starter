import { CSSProperties, ReactElement } from 'react'

import { css } from '@/styled-system/css'

export type DividerProps = {
  className?: string
  direction?: 'horizontal' | 'vertical' | undefined
  repeat?: boolean
  src: string
  width?: string
  height: string
}

/**
 * Divider is a component that creates a divider line in using css background image.
 * @component
 * @param {DividerProps} props - The props of the component.
 * @param {string} props.className - Optional. Additional CSS classes to apply to the component.
 * @param {'horizontal' | 'vertical' | undefined} props.direction - The direction of the divider. Defaults to 'horizontal'.
 * @param {boolean} props.repeat - Optional. Determines whether the background image should repeat along the length of the divider.
 * @param {string} props.src - The URL of the background image.
 * @param {string} props.width - Optional. The width of the divider. Can be local or remote.
 * @param {string} props.height - The height of the divider.
 * @returns {JSX.Element} A `hr` element with the calculated styles applied.
 *
 * @example
 * <Divider src="/img/construction.gif" width="574px" height="51px" />
 */
export const Divider = ({
  className = '',
  direction = 'horizontal',
  height,
  repeat = false,
  src,
  width,
}: DividerProps): ReactElement<HTMLHRElement> => {
  // build time styles
  const styles = css({
    display: 'block',
    border: 0,
  })

  // runtime styles
  const runtimeStyles: CSSProperties = {
    backgroundImage: `url(${src})`,
    backgroundRepeat: repeat
      ? direction === 'vertical'
        ? 'repeat-y'
        : 'repeat-x'
      : 'no-repeat',
    height: height,
    width: width,
  }

  return <hr className={`${className} ${styles}`} style={runtimeStyles} />
}

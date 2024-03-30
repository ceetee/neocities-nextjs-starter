import { css } from '@/styled-system/css'

import { Divider } from '@/components/Divider'
import { ShadowHeading } from '@/components/ShadowHeading'

export default function Home() {
  return (
    <div
      className={css({
        alignItems: 'center',
        color: 'white',
        display: 'flex',
        flexDir: 'column',
        gap: '24',
        height: 'full',
        justifyContent: 'center',
        p: '6',
      })}
    >
      <ShadowHeading
        className={css({
          fontSize: '5xl',
          fontWeight: 'bold',
          textAlign: 'center',
          sm: {
            fontSize: '6xl',
          },
        })}
      >
        neocities starter
      </ShadowHeading>
      <Divider src="/img/construction.gif" width="574px" height="51px" />
    </div>
  )
}

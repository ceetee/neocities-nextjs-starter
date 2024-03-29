import Image from 'next/image'
import { css } from '@/styled-system/css'

import { ShadowHeading } from '@/components/ShadowHeading'

export default function Home() {


  return (
    <div className={css({
      alignItems: 'center',
      color: 'white',
      display: 'flex',
      flexDir: 'column',
      gap: '24',
      height: 'full',
      justifyContent: 'center',
      p: '6',
    })}>
      <ShadowHeading className={css({
        fontSize: '5xl',
        fontWeight: 'bold',
        textAlign: 'center',
        sm: {
          fontSize: '6xl',
        },
      })}>neocities starter</ShadowHeading>
      <Image src="/img/construction.gif" alt="logo" width={574} height={51} />
    </div>
  )
}

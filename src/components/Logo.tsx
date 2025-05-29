import Image, { type ImageProps } from 'next/image'
import logo from '@/images/logos/logo4.svg'

export function Logo(props: Omit<ImageProps, 'src' | 'alt'>) {
  return (
    <Image
      src={logo}
      alt="Gentlemen of Trade"
      width={1563}
      height={1563}
      {...props}
    />
  )
}

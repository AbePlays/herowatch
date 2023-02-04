import { StaticImageData } from 'next/image'
import Link from 'next/link'

import BlurImage from './BlurImage'

interface IImageWrapper {
  alt: string
  bg: string
  href: string
  src: StaticImageData
}

export default function ImageWrapper({ alt, bg, href, src }: IImageWrapper) {
  return (
    <Link
      className={`grid h-64 w-72 flex-shrink-0 cursor-pointer place-content-center overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform active:scale-95 ${bg}`}
      href={href}
    >
      <BlurImage alt={alt} src={src} />
    </Link>
  )
}

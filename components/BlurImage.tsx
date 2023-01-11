import type { FunctionComponent } from 'react'
import Image, { ImageProps } from 'next/legacy/image'
import { useState } from 'react'

const BlurImage: FunctionComponent<ImageProps> = ({ alt, className, src, ...props }) => {
  const [loading, setLoading] = useState(true)

  return (
    <Image
      alt={alt}
      className={`object-cover object-center duration-700 ease-in-out ${className} ${
        loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
      }`.trim()}
      onLoadingComplete={() => setLoading(false)}
      placeholder={typeof src === 'string' ? 'empty' : 'blur'}
      src={src}
      {...props}
    />
  )
}

export default BlurImage

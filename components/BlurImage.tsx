'use client'

import Image, { ImageProps } from 'next/legacy/image'
import React from 'react'

export default function BlurImage({ alt, className, src, ...props }: ImageProps) {
  const [loading, setLoading] = React.useState(true)

  return (
    <Image
      alt={alt}
      className={`object-cover object-center duration-500 ease-in-out ${className} ${
        loading ? 'scale-110 blur grayscale' : 'scale-100 blur-0 grayscale-0'
      }`.trim()}
      onLoadingComplete={() => setLoading(false)}
      placeholder={typeof src === 'string' ? 'empty' : 'blur'}
      src={src}
      {...props}
    />
  )
}

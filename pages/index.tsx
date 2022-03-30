import type { NextPage } from 'next'
import type { StaticImageData } from 'next/image'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import dc from '../public/images/DC.png'
import handshake from '../public/images/Handshake.webp'
import marvel from '../public/images/Marvel.jpeg'

interface IImageWrapper {
  alt: string
  bg: string
  href: string
  src: StaticImageData
}

const ImageWrapper = ({ alt, bg, href, src }: IImageWrapper) => {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <Link href={href} passHref>
      <motion.a
        className={`grid h-64 w-72 flex-shrink-0 cursor-pointer place-content-center overflow-hidden rounded-lg shadow-lg ${bg}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          alt={alt}
          className={`duration-700 ease-in-out ${
            loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
          }`}
          objectFit="cover"
          objectPosition="center"
          onLoadingComplete={() => setLoading(false)}
          placeholder="blur"
          src={src}
        />
      </motion.a>
    </Link>
  )
}

const Home: NextPage = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    const evaluateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
      }
    }

    evaluateWidth()
    window.addEventListener('resize', evaluateWidth)

    return () => window.removeEventListener('resize', evaluateWidth)
  }, [])

  return (
    <>
      <div className="relative min-h-screen w-screen bg-[url('/images/bg.jpeg')] bg-cover bg-no-repeat blur-2xl hue-rotate-[150deg]">
        <Head>
          <title>Next DC Marvel Project</title>
          <meta name="description" content="Tracks Upcoming DC and Marvel Projects" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <motion.div
        className="absolute inset-0 p-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header>
          <nav>
            <Link href="/" passHref>
              <a className="text-lg tracking-widest">trackr.</a>
            </Link>
          </nav>
        </header>
        <div className="mt-20">
          <p className="font-bold text-stone-600" style={{ wordSpacing: '2px' }}>
            Upcoming DC and Marvel Project Tracker
          </p>
          <h1 className="mt-20 text-5xl font-bold leading-tight sm:text-6xl">
            Choose a Cinematic <br />
            Universe
          </h1>
        </div>
        <div className="mx-auto mt-20 max-w-screen-md overflow-hidden p-4">
          <motion.div
            className="flex space-x-8"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            key={width}
            ref={carouselRef}
          >
            <ImageWrapper alt="marvel logo" bg="bg-[#ec1d24]" href="/marvel" src={marvel} />
            <ImageWrapper alt="dc logo" bg="bg-[#0378F2]" href="/dc" src={dc} />
            <ImageWrapper alt="" bg="bg-[#fff3c1]" href="/" src={handshake} />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Home

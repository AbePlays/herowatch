import type { NextPage } from 'next'
import type { StaticImageData } from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

import BlurImage from '../components/BlurImage'
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
  return (
    <Link href={href} passHref>
      <motion.a
        className={`grid h-64 w-72 flex-shrink-0 cursor-pointer place-content-center overflow-hidden rounded-lg shadow-lg ${bg}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <BlurImage alt={alt} src={src} />
      </motion.a>
    </Link>
  )
}

const Home: NextPage = () => {
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
        <ul className="no-scrollbar mx-auto mt-20 flex max-w-screen-md snap-x gap-8 overflow-x-auto p-4">
          <li className="snap-center">
            <ImageWrapper alt="marvel logo" bg="bg-[#ec1d24]" href="/marvel" src={marvel} />
          </li>
          <li className="snap-center">
            <ImageWrapper alt="dc logo" bg="bg-[#0378F2]" href="/dc" src={dc} />
          </li>
          <li className="snap-center">
            <ImageWrapper alt="" bg="bg-[#fff3c1]" href="/" src={handshake} />
          </li>
        </ul>
      </motion.div>
    </>
  )
}

export default Home

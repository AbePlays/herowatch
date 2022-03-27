import type { NextPage } from 'next'
import type { StaticImageData } from 'next/image'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import dc from '../public/images/DC.png'
import handshake from '../public/images/Handshake.webp'
import marvel from '../public/images/Marvel.jpeg'

interface IImageWrapper {
  alt: string
  bg: string
  src: StaticImageData
}

const ImageWrapper = ({ alt, bg, src }: IImageWrapper) => {
  return (
    <div
      className={`grid h-64 w-72 flex-shrink-0 cursor-pointer place-content-center overflow-hidden rounded-lg shadow-lg transition-all hover:scale-105 ${bg}`}
    >
      <Image
        alt={alt}
        objectFit="cover"
        objectPosition="center"
        placeholder="blur"
        src={src}
      />
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <>
      <div className="relative min-h-screen w-screen bg-[url('/images/bg.jpeg')] bg-cover bg-no-repeat blur-2xl hue-rotate-[150deg]">
        <Head>
          <title>Next DC Marvel Project</title>
          <meta
            name="description"
            content="Tracks Upcoming DC and Marvel Projects"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div className="absolute inset-0 p-4 text-center">
        <header>
          <nav>
            <Link href="/" passHref>
              <a className="text-lg tracking-widest">trackr.</a>
            </Link>
          </nav>
        </header>
        <div className="mt-20">
          <p className="font-bold text-stone-600">
            Upcoming DC and Marvel Project Tracker
          </p>
          <h1 className="mt-20 text-5xl font-bold leading-tight sm:text-6xl">
            Choose a Cinematic <br />
            Universe
          </h1>
        </div>
        <div className="no-scrollbar mx-auto mt-20 flex max-w-screen-md space-x-8 overflow-scroll p-4">
          <ImageWrapper bg="bg-[#ec1d24]" src={marvel} alt="marvel logo" />
          <ImageWrapper bg="bg-[#0378F2]" src={dc} alt="dc logo" />
          <ImageWrapper bg="bg-[#fff3c1]" src={handshake} alt="" />
        </div>
      </div>
    </>
  )
}

export default Home

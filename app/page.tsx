import Link from 'next/link'

import dc from '../public/images/DC.png'
import handshake from '../public/images/Handshake.webp'
import marvel from '../public/images/Marvel.jpeg'
import ImageWrapper from './ImageWrapper'

export default function Page() {
  return (
    <>
      <div className="relative min-h-screen w-screen bg-[url('/images/bg.jpeg')] bg-cover bg-no-repeat blur-2xl hue-rotate-[150deg]"></div>
      <div className="absolute inset-0 p-4 text-center">
        <header>
          <nav>
            <Link className="text-lg tracking-widest" href="/">
              trackr.
            </Link>
          </nav>
        </header>
        <div className="mt-20">
          <p className="font-bold text-stone-600" style={{ wordSpacing: '2px' }}>
            Upcoming DC and Marvel Project Tracker
          </p>
          <h1 className="mt-20 text-5xl font-bold leading-tight sm:text-6xl" id="title">
            Choose a Cinematic <br />
            Universe
          </h1>
        </div>
        <main>
          <ul
            aria-labelledby="title"
            className="no-scrollbar mx-auto mt-20 flex max-w-screen-lg snap-x gap-8 overflow-x-auto p-4"
          >
            <li className="snap-center">
              <ImageWrapper alt="marvel logo" bg="bg-[#ec1d24]" href="/marvel/movie" src={marvel} />
            </li>
            <li className="snap-center">
              <ImageWrapper alt="dc logo" bg="bg-[#0378F2]" href="/dc/movie" src={dc} />
            </li>
            <li className="snap-center">
              <ImageWrapper alt="" bg="bg-[#fff3c1]" href="/all/movie" src={handshake} />
            </li>
          </ul>
        </main>
      </div>
    </>
  )
}

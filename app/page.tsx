import Link from 'next/link'

import ImageWrapper from '../components/ImageWrapper'
import dc from '../public/images/DC.png'
import handshake from '../public/images/Handshake.webp'
import marvel from '../public/images/Marvel.jpeg'

export default function Page() {
  return (
    <>
      <div className="p-4 text-center bg-[#EFEDE9] min-h-screen relative isolate">
        <div
          aria-hidden="true"
          className="w-1/2 md:w-1/3 h-2/3 md:h-full rounded-full bg-[#ec1d24] absolute blur-3xl left-0 top-0 opacity-30 -z-10 animate-blob"
        />
        <div
          aria-hidden="true"
          className="hidden md:block w-1/3 h-2/3 md:h-full rounded-full bg-[#fff3c1] absolute blur-3xl left-1/3 top-0 opacity-60 -z-10 animate-blob animation-delay-2000"
        />
        <div
          aria-hidden="true"
          className="w-1/2 md:w-1/3 h-2/3 md:h-full rounded-full bg-[#0378F2] absolute blur-3xl right-0 top-0 opacity-30 -z-10 animate-blob animation-delay-4000"
        />
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
            className="no-scrollbar mx-auto mt-20 flex max-w-screen-md snap-x gap-8 overflow-x-auto p-4"
          >
            <li className="snap-center">
              <ImageWrapper alt="marvel logo" bg="bg-[#ec1d24]" href="/marvel/movie" src={marvel} />
            </li>
            <li className="snap-center">
              <ImageWrapper alt="" bg="bg-[#fff3c1]" href="/all/movie" src={handshake} />
            </li>
            <li className="snap-center">
              <ImageWrapper alt="dc logo" bg="bg-[#0378F2]" href="/dc/movie" src={dc} />
            </li>
          </ul>
        </main>
      </div>
    </>
  )
}

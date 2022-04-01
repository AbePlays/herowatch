import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import IconClock from '../../components/IconClock'

export const getStaticProps: GetStaticProps = async () => {
  const dev = process.env.NODE_ENV !== 'production'
  const res = await fetch(
    dev ? 'http://localhost:3000/api/marvel/movie' : 'https://nextdcmarvelproject.vercel.app/api/marvel/movie'
  )
  const data = await res.json()

  const today = new Date()
  const result =
    data &&
    data.results &&
    data.results?.filter((item: any) => {
      const dateReleaseProduct = new Date(item.release_date)
      item.daysToRelease = Math.floor((dateReleaseProduct.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
      return dateReleaseProduct.getTime() >= today.getTime()
    })

  // TODO: trim the data to include only relevant data

  return {
    props: { results: result?.reverse() },
    revalidate: 60 * 60 * 6, // 6 hours
  }
}

interface Movie {
  daysToRelease: number
  id: number
  poster_path: string
  release_date: string
  title: string
}

interface Props {
  results: Movie[]
}

const MarvelMovie: NextPage<Props> = (props) => {
  const carouselRef = useRef<HTMLUListElement>(null)
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Head>
        <title>Upcoming Marvel Movies</title>
        <meta name="description" content="Check upcoming Marvel movies" />
      </Head>
      <div className="mx-auto mt-20 max-w-screen-lg overflow-hidden">
        {props.results?.length > 0 ? (
          <motion.ul
            className="flex cursor-pointer space-x-8 p-4"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            key={width}
            ref={carouselRef}
          >
            {props?.results?.map((item) => (
              <li className="shrink-0 overflow-hidden rounded-lg shadow-lg" key={item?.id}>
                <div className="relative h-[25rem] w-60 sm:h-[30rem] sm:w-80">
                  <Image
                    alt={item.title + ' poster'}
                    src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                    height="100%"
                    width="100%"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute right-2 bottom-2 left-2 space-y-2 rounded-lg bg-white/20 p-2 font-semibold text-white backdrop-blur-sm">
                    <h2 className="">{item?.title}</h2>
                    <div className="flex items-center gap-2">
                      <IconClock />
                      <span className="text-sm uppercase tracking-widest">{item?.daysToRelease} Days to go</span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </motion.ul>
        ) : (
          <p className="text-center">No Content Found</p>
        )}
      </div>
    </motion.div>
  )
}

export default MarvelMovie

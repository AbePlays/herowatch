import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'

import BlurImage from '../../components/BlurImage'
import IconClock from '../../components/IconClock'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const dev = process.env.NODE_ENV !== 'production'
  const basePath = dev ? 'http://localhost:3000' : 'https://nextdcmarvelproject.vercel.app'
  const dcApi = `${basePath}/api/dc/movie`
  const marvelApi = `${basePath}/api/marvel/movie`

  const apiRes = await Promise.all([fetch(dcApi), fetch(marvelApi)])
  const dcRes = await apiRes[0].json()
  const marvelRes = await apiRes[1].json()
  const data = { results: [...dcRes?.results, ...marvelRes?.results] }

  const today = new Date()
  const result =
    data &&
    data.results &&
    data.results
      .filter((item) => {
        const dateReleaseProduct = new Date(item.release_date)
        item.daysToRelease = Math.floor((dateReleaseProduct.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
        return dateReleaseProduct.getTime() >= today.getTime()
      })
      .map((item) => {
        return { daysToRelease: item.daysToRelease, id: item.id, poster_path: item.poster_path, title: item.title }
      })
      .sort((a, b) => b.daysToRelease - a.daysToRelease)

  res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=600')

  return {
    props: { results: result?.reverse() },
  }
}

interface Movie {
  daysToRelease: number
  id: number
  poster_path: string
  title: string
}

interface Props {
  results: Movie[]
}

const AllMovie: NextPage<Props> = (props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Head>
        <title>Upcoming Dc Movies</title>
        <meta name="description" content="Check upcoming Dc and Marvel movies" />
      </Head>
      {props.results?.length > 0 ? (
        <ul className="no-scrollbar mx-auto mt-20 flex max-w-screen-lg snap-x gap-8 overflow-x-auto p-4">
          {props?.results?.map((item) => (
            <li
              className="relative h-[25rem] w-60 shrink-0 snap-center overflow-hidden rounded-lg shadow-lg sm:h-[30rem] sm:w-80"
              key={item?.id}
            >
              <BlurImage
                alt={item.title + ' poster'}
                className="bg-gray-400"
                layout="fill"
                src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
              />
              <div className="absolute right-2 bottom-2 left-2 space-y-2 rounded-lg bg-white/20 p-2 font-semibold text-white backdrop-blur-sm">
                <h2 className="">{item?.title}</h2>
                <div className="flex items-center gap-2">
                  <IconClock />
                  <span className="text-sm uppercase tracking-widest">{item?.daysToRelease} Days to go</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">No Content Found</p>
      )}
    </motion.div>
  )
}

export default AllMovie

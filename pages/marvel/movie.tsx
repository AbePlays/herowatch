import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'

export const getStaticProps: GetStaticProps = async () => {
  const dev = process.env.NODE_ENV !== 'production'
  const res = await fetch(
    dev ? 'http://localhost:3000/api/marvel/movie' : 'https://nextdcmarvelproject.vercel.app/api/marvel/movie'
  )
  const data = await res.json()

  // TODO: trim the data to include only relevant data

  return {
    props: { movie: data },
    revalidate: 60 * 60 * 6, // 6 hours
  }
}

interface Movie {
  id: number
  title: string
}

interface Props {
  movie: {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
  }
}

const MarvelMovie: NextPage<Props> = (props) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Head>
        <title>Upcoming Marvel Movies</title>
        <meta name="description" content="Check upcoming Marvel movies" />
      </Head>
      <h1>Upcoming Marvel Movie</h1>
      <ul>
        {props?.movie?.results?.map((item) => (
          <li key={item?.id}>
            <h2>{item?.title}</h2>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default MarvelMovie

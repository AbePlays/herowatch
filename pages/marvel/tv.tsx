import type { NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'

const MarvelMovie: NextPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Head>
        <title>Upcoming Marvel Tv Shows</title>
        <meta name="description" content="Check upcoming Marvel tv shows" />
      </Head>
      <h1>Upcoming Marvel Tv Shows</h1>
      <p>Content coming soon...</p>
    </motion.div>
  )
}

export default MarvelMovie

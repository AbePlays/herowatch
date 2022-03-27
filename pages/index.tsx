import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next DC Marvel Project</title>
        <meta
          name="description"
          content="Tracks Upcoming DC and Marvel Projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-green-400">Content Coming Soon...</div>
    </div>
  )
}

export default Home

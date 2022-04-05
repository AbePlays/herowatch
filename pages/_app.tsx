import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import Wrapper from '../components/Wrapper'
import '../styles/globals.css'

// allowed routes are routes on which wrapper is required
const allowedRoutes = ['/marvel/movie', '/dc/movie', '/marvel/tv', '/dc/tv', '/all/movie', '/all/tv']

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  if (allowedRoutes.includes(router.pathname)) {
    return (
      <Wrapper>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Wrapper>
    )
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp

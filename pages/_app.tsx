import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import Wrapper from '../components/Wrapper'
import '../styles/globals.css'

// allowed routes are routes on which wrapper is required
const allowedRoutes = ['/marvel/movie', '/dc/movie', '/marvel/tv', '/dc/tv']

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  if (allowedRoutes.includes(router.pathname)) {
    return (
      <AnimatePresence exitBeforeEnter>
        <Wrapper key={router.pathname}>
          <Component {...pageProps} />
        </Wrapper>
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.pathname} />
    </AnimatePresence>
  )
}

export default MyApp

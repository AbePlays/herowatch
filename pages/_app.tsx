import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import { useEffect } from 'react'

import 'nprogress/nprogress.css'
import Wrapper from '../components/Wrapper'
import '../styles/globals.css'

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
})

// allowed routes are routes on which wrapper is required
const allowedRoutes = ['/marvel/movie', '/dc/movie', '/marvel/tv', '/dc/tv', '/all/movie', '/all/tv']

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    Router.events.on('routeChangeStart', NProgress.start)
    Router.events.on('routeChangeComplete', NProgress.done)
    Router.events.on('routeChangeError', NProgress.done)

    return () => {
      Router.events.off('routeChangeStart', NProgress.start)
      Router.events.off('routeChangeComplete', NProgress.done)
      Router.events.off('routeChangeError', NProgress.done)
    }
  }, [])

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

import { Plus_Jakarta_Sans } from '@next/font/google'
import { AnimatePresence, LazyMotion } from 'framer-motion'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import React from 'react'

import 'nprogress/nprogress.css'
import Wrapper from '../components/Wrapper'
import '../styles/globals.css'

const font = Plus_Jakarta_Sans({ subsets: ['latin'] })

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
})

// allowed routes are routes on which wrapper is required
const allowedRoutes = ['/marvel/movie', '/dc/movie', '/marvel/tv', '/dc/tv', '/all/movie', '/all/tv']
const loadFeatures = () => import('../utils/framer-motion').then((res) => res.default)

export default function MyApp({ Component, pageProps, router }: AppProps) {
  React.useEffect(() => {
    Router.events.on('routeChangeStart', NProgress.start)
    Router.events.on('routeChangeComplete', NProgress.done)
    Router.events.on('routeChangeError', NProgress.done)

    return () => {
      Router.events.off('routeChangeStart', NProgress.start)
      Router.events.off('routeChangeComplete', NProgress.done)
      Router.events.off('routeChangeError', NProgress.done)
    }
  }, [])

  let Comp: React.FC<{ children: React.ReactNode }> = React.Fragment

  if (allowedRoutes.includes(router.pathname)) {
    Comp = Wrapper
  }

  return (
    <LazyMotion features={loadFeatures} strict>
      <Comp>
        <style jsx global>{`
          html {
            font-family: ${font.style.fontFamily};
          }
        `}</style>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Comp>
    </LazyMotion>
  )
}

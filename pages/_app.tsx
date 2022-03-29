import type { AppProps } from 'next/app'

import Wrapper from '../components/Wrapper'
import '../styles/globals.css'

// allowed routes are routes on which wrapper is required
const allowedRoutes = ['/marvel/movie', '/dc/movie', '/marvel/tv', '/dc/tv']

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  if (allowedRoutes.includes(router.pathname)) {
    return (
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    )
  }

  return <Component {...pageProps} />
}

export default MyApp

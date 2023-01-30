import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Dc: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/dc/movie')
  }, [router])

  return <></>
}

export default Dc

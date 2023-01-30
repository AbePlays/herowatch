import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Marvel: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/marvel/movie')
  }, [router])

  return <></>
}

export default Marvel

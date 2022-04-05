import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const All: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/all/movie')
  }, [router])

  return <></>
}

export default All

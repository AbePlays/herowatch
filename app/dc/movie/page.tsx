import { type Metadata } from 'next'
import Carousel from '../../../components/Carousel'

export const metadata: Metadata = {
  title: 'DC',
  description: 'Upcoming DC Movies',
}

async function loader() {
  const api_key = process.env.TMDB_API_KEY
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&page=1&with_companies=128064&sort_by=primary_release_date.desc`,
    { cache: 'no-store' }
  )
  const data = await response.json()

  const today = new Date()
  const result =
    data &&
    data.results &&
    data.results
      ?.filter((item: any) => {
        const dateReleaseProduct = new Date(item.release_date)
        item.daysToRelease = Math.floor((dateReleaseProduct.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
        return dateReleaseProduct.getTime() >= today.getTime()
      })
      ?.map((item: any) => {
        return {
          daysToRelease: item.daysToRelease,
          id: item.id,
          poster_path: item.poster_path,
          title: item.title,
        }
      })

  return result?.reverse()
}

export default async function Page() {
  const data = await loader()
  return <Carousel data={data || []} />
}

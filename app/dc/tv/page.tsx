import { type Metadata } from 'next'
import Carousel from '../../../components/Carousel'

export const metadata: Metadata = {
  title: 'DC',
  description: 'Upcoming DC Tv Shows',
}

export default async function Page() {
  return <Carousel data={[]} />
}

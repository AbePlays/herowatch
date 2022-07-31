import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const api_key = process.env.TMDB_API_KEY
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&page=1&with_companies=420&sort_by=primary_release_date.desc`
    )
    const data = await response.json()
    res.status(200).json(data)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to load data' })
  }
}

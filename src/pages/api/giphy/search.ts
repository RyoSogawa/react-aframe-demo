import giphyApi from 'giphy-api'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchGiphyResponse>
) {
  const { keyword } = req.query as unknown as SearchGiphyParams

  const giphy = giphyApi({
    apiKey: process.env.GIPHY_API_KEY,
    timeout: 3000,
  })

  const response = await giphy
    .search({ q: keyword, limit: 1, rating: 'y' })
    .catch(err => {
      res.status(500)
      console.error(err)
    })

  if (response?.data && response?.data.length > 0) {
    const image = response.data[0].images.preview

    res.status(200).json({ image })
  }
}

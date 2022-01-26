import type {
  PlacesNearbyResponse,
  PlacesNearbyResponseData,
} from '@googlemaps/google-maps-services-js'
import { Client, Language } from '@googlemaps/google-maps-services-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { AxiosError } from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlacesNearbyResponseData>
) {
  const { lat, lng, ...restParam } = req.query as unknown as NearbyParams

  const client = new Client({})

  const response: PlacesNearbyResponse | void = await client
    .placesNearby({
      params: {
        key: process.env.GOOGLE_MAP_API_KEY,
        radius: 150,
        language: Language.ja,
        location: { lat: Number(lat), lng: Number(lng) },
        ...restParam,
      },
      timeout: 1000, // milliseconds
    })
    .catch((e: AxiosError) => {
      console.warn(e.response?.data.error_message)
      res.statusCode = e.response?.status || 500
    })

  if (response?.data) {
    res.status(200).json(response.data)
  }
}

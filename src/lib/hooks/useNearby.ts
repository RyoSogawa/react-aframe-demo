import useSWRImmutable from 'swr/immutable'
import { fetcher } from '../fetcher'
import type { Fetcher } from 'swr'
import type { PlacesNearbyResponseData } from '@googlemaps/google-maps-services-js'

export const useNearby = (shouldSkip: boolean, params: NearbyParams) => {
  return useSWRImmutable(
    !shouldSkip && '/api/google-map/nearby?' + new URLSearchParams(params),
    fetcher as Fetcher<PlacesNearbyResponseData>
  )
}

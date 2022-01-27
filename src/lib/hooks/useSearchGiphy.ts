import useSWRImmutable from 'swr/immutable'
import { fetcher } from '../fetcher'
import type { Fetcher } from 'swr'

export const useSearchGiphy = (params: SearchGiphyParams) => {
  return useSWRImmutable(
    '/api/giphy/search?' + new URLSearchParams(params),
    fetcher as Fetcher<SearchGiphyResponse>
  )
}

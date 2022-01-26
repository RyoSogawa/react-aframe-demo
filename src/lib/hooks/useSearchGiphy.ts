import useSWRImmutable from 'swr/immutable'
import { fetcher } from '../fetcher'
import type { Fetcher } from 'swr'

export const useSearchGiphy = (params: SearchGiphyParams) => {
  const keyword = encodeURI(params.keyword.replaceAll('_', ' '))

  return useSWRImmutable(
    '/api/giphy/search?keyword=' + keyword,
    fetcher as Fetcher<SearchGiphyResponse>
  )
}

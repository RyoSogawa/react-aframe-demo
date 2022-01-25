import axios from 'axios'

export const fetcher: unknown = (url: string) =>
  axios.get(url).then(res => res.data)

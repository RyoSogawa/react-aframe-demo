type NearbyParams = {
  lat: string
  lng: string
  type?: string
  name?: string
}

type SearchGiphyParams = {
  keyword: string
}

type SearchGiphyResponse = {
  image: BaseImage & {
    size: string
    mp4: string
  }
}

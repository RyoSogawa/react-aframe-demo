import React from 'react'
import { PlaceData } from '@googlemaps/google-maps-services-js'
import AImage from '../aframe/AImage'
import ACone from '../aframe/ACone'
import { useSearchGiphy } from '../../lib/hooks/useSearchGiphy'

export type PlaceProps = Partial<PlaceData>

const Place = (props: PlaceProps): JSX.Element => {
  const { place_id, geometry, icon_background_color, types } = props
  const { data } = useSearchGiphy({ keyword: types ? types[0] : 'store' })

  return (
    <>
      <ACone
        id={place_id}
        gps-Entity-Place={`latitude: ${geometry?.location.lat}; longitude: ${geometry?.location.lng};`}
        color={icon_background_color}
        width={0.5}
        height={2}
      />
      {data && (
        <AImage
          src={data.image.mp4}
          gps-Entity-Place={`latitude: ${geometry?.location.lat}; longitude: ${geometry?.location.lng};`}
          position={'0 4 2'}
          width={8}
          height={(data.image.height * 8) / data.image.width}
        />
      )}
    </>
  )
}

export default Place

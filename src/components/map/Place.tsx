import React from 'react'
import { PlaceData } from '@googlemaps/google-maps-services-js'
import AImage from '../aframe/AImage'
import ACone from '../aframe/ACone'

export type PlaceProps = Partial<PlaceData>

const Place = (props: PlaceProps): JSX.Element => {
  const { place_id, geometry, icon, icon_background_color } = props

  return (
    <>
      <ACone
        id={place_id}
        gps-Entity-Place={`latitude: ${geometry?.location.lat}; longitude: ${geometry?.location.lng};`}
        color={icon_background_color}
        width={0.5}
        height={2}
      />
      <AImage
        src={icon}
        gps-Entity-Place={`latitude: ${geometry?.location.lat}; longitude: ${geometry?.location.lng};`}
        position={'0 2 0'}
      />
    </>
  )
}

export default Place

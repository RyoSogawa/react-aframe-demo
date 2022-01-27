import React from 'react'
import { PlaceData } from '@googlemaps/google-maps-services-js'
import AImage from '../aframe/AImage'
import ACone from '../aframe/ACone'
import { useSearchGiphy } from '../../lib/hooks/useSearchGiphy'
import { convertAddressTypeToURI } from '../../lib/utils'
import APlane from '../aframe/APlane'
import AText from '../aframe/AText'

export type PlaceProps = Partial<PlaceData>

const Place = (props: PlaceProps): JSX.Element => {
  const { place_id, geometry, icon_background_color, types } = props
  const { data, isValidating } = useSearchGiphy({
    keyword: convertAddressTypeToURI(types),
  })

  const latLng = `latitude: ${geometry?.location.lat}; longitude: ${geometry?.location.lng};`

  return (
    <>
      <ACone
        id={place_id}
        gps-Entity-Place={latLng}
        color={icon_background_color}
        width={0.5}
        height={2}
      />
      {isValidating && (
        <>
          <APlane
            gps-Entity-Place={latLng}
            position={'0 4 2'}
            color={'white'}
            width={8}
            height={6}
          />
          <AText
            value={'loading...'}
            gps-Entity-Place={latLng}
            position={'0 4 0'}
            color={'black'}
            width={18}
            align="center"
            z-Offset={1}
          />
        </>
      )}
      {data && (
        <AImage
          src={data.image.mp4}
          gps-Entity-Place={latLng}
          position={'0 4 2'}
          width={8}
          height={(data.image.height * 8) / data.image.width}
        />
      )}
    </>
  )
}

export default Place

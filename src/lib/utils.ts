import { AddressType } from '@googlemaps/google-maps-services-js'

export const convertAddressTypeToURI = (
  mapTypes: AddressType[] | undefined
) => {
  if (!mapTypes) return 'something'

  const mapType = mapTypes.join(' ').replaceAll('_', ' ')

  return encodeURI(mapType)
}

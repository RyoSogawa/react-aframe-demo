import type { NextPage } from 'next'
import { useEffect } from 'react'
import AScene from '../components/aframe/AScene'
import ACamera from '../components/aframe/ACamera'
import { useMounted } from '../lib/hooks/useMounted'
import AText from '../components/aframe/AText'

const Home: NextPage = () => {
  const mounted = useMounted()
  let latitude: string
  let longitude: string
  // let commonProps: any

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(data => {
      latitude = String(data.coords.latitude)
      longitude = String(data.coords.longitude)
    })
  })

  const commonProps = {
    'look-At': '[gps-camera]',
    'gps-entity-place':
      'latitude: 37.492151723031024; longitude: 139.94461074269023;',
    // 'gps-Entity-Place': `latitude: ${latitude}; longitude: ${longitude};`,
  }

  if (!mounted) return <div>loading...</div>

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <AScene
        embedded=""
        renderer="colorManagement: true"
        vr-Mode-Ui="enabled: false"
        arjs="trackingMethod: best; sourceType: webcam; matrixCodeType: 3x3;detectionMode:mono_and_matrix; debugUIEnabled: false;"
      >
        <ACamera
          gps-Camera="maxDistance:30"
          cursor="rayOrigin: mouse; fuse:false"
          camera=""
        />

        <AText
          {...commonProps}
          value={'Hello, World'}
          position={'0 4 0'}
          color={'black'}
          width={18}
          align="center"
          z-Offset={1}
        />

        <AText
          {...commonProps}
          value={'Hello, Demo'}
          position={'4 4 0'}
          color={'white'}
          width={18}
          align="center"
          z-Offset={2}
        />
      </AScene>
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Scene from '../components/aframe/Scene'
import Camera from '../components/aframe/Camera'
import Box from '../components/aframe/Box'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Scene
        embedded=""
        renderer="colorManagement: true"
        vr-Mode-Ui="enabled: false"
        arjs="trackingMethod: best; sourceType: webcam; matrixCodeType: 3x3;detectionMode:mono_and_matrix; debugUIEnabled: false;"
      >
        <Camera
          gps-Camera="maxDistance:30"
          cursor="rayOrigin: mouse; fuse:false"
          camera=""
        />

        <Box
          gps-Entity-Place="latitude: 34.67439174652549; longitude: 135.49141395963895;"
          id="block"
          color="#df609c"
        />

        <Box
          gps-Entity-Place="latitude: 33.562941; longitude: 130.414829;"
          id="block"
          color="#df609c"
        />
      </Scene>
    </div>
  ) : null
}

export default Home

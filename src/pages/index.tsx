import type { NextPage } from 'next'
import Scene from '../components/aframe/Scene'
import Camera from '../components/aframe/Camera'
import Box from '../components/aframe/Box'
import useGeolocation from 'react-use/lib/useGeolocation'
import { useMounted } from '../lib/hooks/useMounted'
import { useNearby } from '../lib/hooks/useNearby'

const Home: NextPage = () => {
  const mounted = useMounted()
  const { latitude, longitude, loading: loadingGeolocation } = useGeolocation()
  const { data } = useNearby(loadingGeolocation, {
    lat: String(latitude),
    lng: String(longitude),
  })

  if (!mounted) return <div>loading...</div>

  return (
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

        {data &&
          data.results.map(r => (
            <Box
              key={r.place_id}
              id={r.place_id}
              gps-Entity-Place={`latitude: ${r.geometry?.location.lat}; longitude: ${r.geometry?.location.lng};`}
              color="#df609c"
            />
          ))}
      </Scene>
    </div>
  )
}

export default Home

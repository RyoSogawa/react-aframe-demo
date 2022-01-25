import type { NextPage } from 'next'
import AScene from '../components/aframe/AScene'
import ACamera from '../components/aframe/ACamera'
import ABox from '../components/aframe/ABox'
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

        {data &&
          data.results.map(r => (
            <ABox
              key={r.place_id}
              id={r.place_id}
              gps-Entity-Place={`latitude: ${r.geometry?.location.lat}; longitude: ${r.geometry?.location.lng};`}
              color="#df609c"
            />
          ))}
      </AScene>
    </div>
  )
}

export default Home

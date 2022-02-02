import type { NextPage } from 'next'
import AScene from '../components/aframe/AScene'
import ACamera from '../components/aframe/ACamera'
import useGeolocation from 'react-use/lib/useGeolocation'
import { useMounted } from '../lib/hooks/useMounted'
import { useNearby } from '../lib/hooks/useNearby'
import Place from '../components/map/Place'

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

        {data && data.results.map(r => <Place key={r.place_id} {...r} />)}
      </AScene>
      <img
        src={'/Poweredby-giphy.png'}
        alt={'powered by giphy'}
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          width: '120px',
        }}
      />
    </div>
  )
}

export default Home

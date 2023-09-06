import { MutableRefObject, useEffect } from 'react'
import { Light, PerspectiveCamera } from 'three'

function useLightShadowConfigs(lightRef: MutableRefObject<Light | undefined>) {
  useEffect(() => {
    const light = lightRef.current
    if (light && light.shadow) {
      const camera = light.shadow.camera as PerspectiveCamera
      light.shadow.mapSize.width = 256
      light.shadow.mapSize.height = 256
      if (camera && camera instanceof PerspectiveCamera) {
        camera.far = 7
      }
    }
  })
}

export { useLightShadowConfigs }

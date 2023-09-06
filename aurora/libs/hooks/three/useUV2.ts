import { useEffect, useRef } from 'react'
import { BoxGeometry, Float32BufferAttribute } from 'three'
// import { useFrame } from '@react-three/fiber'

function useUV2() {
  const geomRef = useRef<BoxGeometry>(null)

  useEffect(() => {
    const geometry = geomRef.current

    if (geometry) {
      geometry.setAttribute(
        'uv2',
        new Float32BufferAttribute(geometry.attributes.uv.array, 2),
      )
    }
  }, [])

  // // If you need to update the UV2 attribute continuously, you can use useFrame
  // useFrame(() => {
  //   const geometry = geomRef.current

  //   if (geometry) {
  //     // Update the UV2 attribute here if needed
  //   }
  // })

  return geomRef
}

export { useUV2 }

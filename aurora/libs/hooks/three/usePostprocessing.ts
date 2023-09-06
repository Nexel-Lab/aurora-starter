import { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import {
  EffectComposer,
  OverrideMaterialManager,
  RenderPass,
  EffectPass,
} from 'postprocessing'

function usePostprocessing(reflectorPipeline = []) {
  const { gl, size, scene, camera } = useThree()
  const [composer] = useMemo(() => {
    OverrideMaterialManager.workaroundEnabled = true
    const composer = new EffectComposer(gl, {
      frameBufferType: THREE.HalfFloatType,
      multisampling: 8,
    })
    const renderPass = new RenderPass(scene, camera)
    const effectPass = new EffectPass(camera)
    reflectorPipeline.forEach((pass) => composer.addPass(pass))
    composer.addPass(renderPass)
    composer.addPass(effectPass)
    return [composer]
  }, [gl, scene, camera, reflectorPipeline])
  useEffect(
    () => void composer.setSize(size.width, size.height),
    [composer, size],
  )
  useFrame((_, delta) => void composer.render(delta), -1)
}

export { usePostprocessing }

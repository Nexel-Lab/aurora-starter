import type {
  Target,
  VariantLabels,
  AnimationControls,
  TargetAndTransition,
} from 'framer-motion'
// import { SVGAttributes, CSSProperties } from 'react'

// interface CustomValueType {
//   mix: (from: any, to: any) => (p: number) => number | string
//   toValue: () => number | string
// }

// declare type MakeCustomValueType<T> = {
//   [K in keyof T]: T[K] | CustomValueType
// }

// declare type Omit$1<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// declare type CSSPropertiesWithoutTransitionOrSingleTransforms = Omit$1<
//   CSSProperties,
//   'transition' | 'rotate' | 'scale' | 'perspective'
// >
// declare type SVGTransformAttributes = {
//   attrX?: number
//   attrY?: number
//   attrScale?: number
// }

// interface TransformProperties {
//   x?: string | number
//   y?: string | number
//   z?: string | number
//   translateX?: string | number
//   translateY?: string | number
//   translateZ?: string | number
//   rotate?: string | number
//   rotateX?: string | number
//   rotateY?: string | number
//   rotateZ?: string | number
//   scale?: string | number
//   scaleX?: string | number
//   scaleY?: string | number
//   scaleZ?: string | number
//   skew?: string | number
//   skewX?: string | number
//   skewY?: string | number
//   originX?: string | number
//   originY?: string | number
//   originZ?: string | number
//   perspective?: string | number
//   transformPerspective?: string | number
// }

// interface CustomStyles {
//   size?: string | number
//   radius?: string | number
//   shadow?: string
//   image?: string
// }

// interface SVGPathProperties {
//   pathLength?: number
//   pathOffset?: number
//   pathSpacing?: number
// }

// declare type VariantLabels = string | string[]

// declare type TargetProperties =
//   CSSPropertiesWithoutTransitionOrSingleTransforms &
//     SVGAttributes<SVGElement> &
//     SVGTransformAttributes &
//     TransformProperties &
//     CustomStyles &
//     SVGPathProperties

// declare type Target = MakeCustomValueType<TargetProperties>

// interface AnimationControls {
//   start(
//     definition: AnimationDefinition,
//     transitionOverride?: Transition,
//   ): Promise<any>
//   set(definition: AnimationDefinition): void
//   stop(): void
//   mount(): () => void
// }

// declare type TargetAndTransition = TargetWithKeyframes & {
//   transition?: Transition$1
//   transitionEnd?: Target
// }

export type tInitial = boolean | Target | VariantLabels
export type tAnimate =
  | AnimationControls
  | TargetAndTransition
  | VariantLabels
  | boolean
export type tExit = TargetAndTransition | VariantLabels

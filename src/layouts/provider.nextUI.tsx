'use client'

import { NextUIProvider as NextUIProviderWrapper } from '@nextui-org/react'

export const NextUIProvider = (p: { children: React.ReactNode }) => {
  return <NextUIProviderWrapper>{p.children}</NextUIProviderWrapper>
}

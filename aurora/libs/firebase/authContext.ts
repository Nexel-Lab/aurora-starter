'use client'

import { createContext, useContext } from 'react'

export const AuthContext = createContext<any>(undefined)

export function useAuth() {
  return useContext(AuthContext)
}

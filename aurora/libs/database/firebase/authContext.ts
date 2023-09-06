'use client'

import React, { useContext } from 'react'

export const AuthContext = React.createContext<any>(undefined)

export function useAuth() {
  return useContext(AuthContext)
}

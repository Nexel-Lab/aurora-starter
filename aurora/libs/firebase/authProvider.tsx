'use client'

import React, { useState, useEffect } from 'react'
import * as auth from 'firebase/auth'
import { authInstance } from './auth'
import { AuthContext } from './authContext'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>()
  const [loading, setLoading] = useState(true)

  function signup(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(authInstance, email, password)
  }

  function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(authInstance, email, password)
  }

  function logout() {
    return auth.signOut(authInstance)
  }

  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(authInstance, email)
  }

  function updateEmail(email: string) {
    if (!currentUser) {
      return
    }
    return currentUser.updateEmail(email)
  }

  function updatePassword(password: string) {
    if (!currentUser) {
      return
    }
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authInstance, (user: any) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

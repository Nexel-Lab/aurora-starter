import { create } from 'zustand'
import { AppState } from './AppState'

/** Global store is here **/

export const useAppState = create<AppState>((set) => ({
  something: undefined,
  setSomething: (s) => set({ something: s }, false),
}))

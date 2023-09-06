import { create } from 'zustand'

/** Global store is here **/

const store: tStore = (set) => ({
  page: 'Home',
  setPage: (p) => set(() => ({ page: p })),
  dark: true,
  setDark: (dark) => set(() => ({ dark: dark })),
  cursor: false,
  setCursor: (cursor) => set(() => ({ cursor: cursor })),
  showNav: true,
  setShowNav: (show) => set(() => ({ showNav: show })),
  showFooter: true,
  setShowFooter: (show) => set(() => ({ showFooter: show })),
})

export type tStore = (set: any) => {
  page: string
  setPage: (p: string) => void
  dark: boolean
  setDark: (dark: boolean) => void
  cursor: boolean
  setCursor: (cursor: string | boolean) => void
  showNav: boolean
  setShowNav: (show: boolean) => void
  showFooter: boolean
  setShowFooter: (show: boolean) => void
}

const store_State = create(store)

export default store_State

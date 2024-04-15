import { create } from 'zustand'

/** Global store is here **/

const store: tStore = (set) => ({
  page: 'Home',
  setPage: (p) => set(() => ({ page: p })),
  dark: true,
  setDark: (dark) => set(() => ({ dark: dark })),
  modal: undefined,
  setModal: (modal) => set(() => ({ modal: modal })),
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
  modal: MODAL | undefined
  setModal: (modal: MODAL | undefined) => void
  cursor: boolean
  setCursor: (cursor: string | boolean) => void
  showNav: boolean
  setShowNav: (show: boolean) => void
  showFooter: boolean
  setShowFooter: (show: boolean) => void
}

export enum MODAL {
  search = 'SEARCH',
  settings = 'SETTINGS',
  user_profile = 'USER_PROFILE',
  something = 'SOMETHING',
}

const store_State = create(store)

export default store_State

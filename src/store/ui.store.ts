import { create } from 'zustand'
import { UiState } from './UiState'

/** Global store is here **/

export const useUiState = create<UiState>((set) => ({
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
}))

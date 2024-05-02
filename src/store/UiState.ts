export interface UiState {
  page: string
  setPage: (p: string) => void
  dark: boolean
  setDark: (dark: boolean) => void
  modal: MODAL | undefined
  setModal: (modal: MODAL | undefined) => void
  cursor: string | boolean
  setCursor: (cursor: string | boolean) => void
  showNav: boolean
  setShowNav: (show: boolean) => void
  showFooter: boolean
  setShowFooter: (show: boolean) => void
}

export enum MODAL {
  search = 'SEARCH',
  settings = 'SETTINGS',
  something = 'SOMETHING',
}

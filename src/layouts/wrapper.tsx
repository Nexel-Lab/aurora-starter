import { app } from '@config'
import { NProgress } from './components/nprogress'
import { Toast } from './components/toast'
import { Providers } from './providers'
import { Setup } from './components/setup'
import Cursor from './components/cursor'
import { Nav } from './components/nav'
import { Modal } from './components/modal'
import { Shortcuts } from './components/shortcuts'

/** Global layout is here
 * Including Navbar, footer, and Global layout components **/

const GlobalWrapper = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Providers>
        <NProgress />
        <Setup />
        {app.Functions.useShortcuts && <Shortcuts />}
        {app.Functions.useModal && <Modal />}
        {children}
        <Nav />
        {app.Functions.useCursor && <Cursor />}
        <Toast />
      </Providers>
    </>
  )
}

export { GlobalWrapper }

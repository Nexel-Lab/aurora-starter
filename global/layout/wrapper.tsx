import { app } from '@global/config'
import CreateProgress from '@aurora/view/modules.nprogress'
import { Providers } from './providers'
import { Setup } from './components/setup'
import Cursor from './components/cursor'
import { Nav } from './components/nav'
import { Modal } from './components/modal'
import { Shortcuts } from './components/shortcuts'

/** Global layout is here
 * Including Navbar, footer, and Global layout components **/

const Wrapper = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Providers>
        <CreateProgress />
        <Setup />
        {app.Functions.useShortcuts && <Shortcuts />}
        {app.Functions.useModal && <Modal />}
        {children}
        <Nav />
        {app.Functions.useCursor && <Cursor />}
      </Providers>
    </>
  )
}

export default Wrapper

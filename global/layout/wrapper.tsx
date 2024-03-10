import { app } from '@global/config'
import CreateProgress from '@aurora/view/modules.nprogress'
import { Providers } from './providers'
import { Setup } from './components/setup'
import Cursor from './components/cursor'
import { Nav } from './components/nav'

/** Global layout is here
 * Including Navbar, footer, and Global layout components **/

const Wrapper = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Providers>
        <CreateProgress />
        <Setup />
        {children}
        <Nav />
        {app.Functions.useCursor && <Cursor />}
      </Providers>
    </>
  )
}

export default Wrapper

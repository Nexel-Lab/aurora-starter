import { app } from '@global/config'
import CreateProgress from '@aurora/view/modules.nprogress'
import { TrpcProvider } from './wrapper.trpc'
import { Setup } from './components/setup'
import Cursor from './components/cursor'
import { Nav } from './components/nav'

const Wrapper = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TrpcProvider>
        <CreateProgress />
        <Setup />
        {children}
        <Nav />
        {app.Functions.useCursor && <Cursor />}
      </TrpcProvider>
    </>
  )
}

export default Wrapper

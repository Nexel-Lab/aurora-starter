const Layout = (p: { children: React.ReactNode }) => (
  <>
    <div className='flex h-screen w-screen flex-col items-center justify-center'>
      {p.children}
    </div>
  </>
)

export default Layout

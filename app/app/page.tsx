import Link from 'next/link'

const Page = () => {
  return (
    <>
      <div className='m-container flex w-dvw flex-col items-center justify-center'>
        {/* <h6 className='text-3xl font-light'>First app is coming.</h6> */}
        <p>
          Now you can access your{' '}
          <Link
            href='/app/profile'
            className='text-quaternary-2 font-bold dark:text-primary-0'
          >
            profile
          </Link>
        </p>
      </div>
    </>
  )
}

export default Page

export default function Offline() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-blue-900'>
      <h2 className='text-2xl font-semibold sm:text-5xl'>You're offline now</h2>
      <h6 className='text-base opacity-60 sm:text-xl'>
        and we can't connect to your cache
      </h6>
      <button className='Btn-white-40 mt-6'>Refresh</button>
    </div>
  )
}

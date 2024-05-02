'use client'

import { ToastContainer } from 'react-toastify'
import clsx from 'clsx'

const Toast = () => {
  const contextClass = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-gray-600',
    warning: 'bg-orange-400',
    default: 'bg-black',
    // dark: 'bg-white-600 font-gray-300',
  }

  type tToastType = 'success' | 'error' | 'info' | 'warning' | 'default'
  // | 'dark'

  return (
    <ToastContainer
      position='top-right'
      toastClassName={({ type }: any) =>
        clsx(
          contextClass[(type || 'default') as tToastType],
          'relative flex p-1 mt-3 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-opacity-30 backdrop-filter backdrop-blur-md border border-white/10',
        )
      }
      bodyClassName={() => 'text-sm font-white font-med block p-3 flex'}
      closeButton={ToastCloseButton}
      // progressClassName={(css) => 'h-64'}
    />
  )
}

const ToastCloseButton = ({ closeToast }: { closeToast: any }) => (
  <div className='m-1 h-3 w-3 fill-white'>
    <svg onClick={closeToast} aria-hidden='true' viewBox='0 0 14 16'>
      <path
        fillRule='evenodd'
        d='M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z'
      ></path>
    </svg>
  </div>
)

export { Toast }

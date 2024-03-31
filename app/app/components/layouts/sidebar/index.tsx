'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@aurora/assets'
import clsx from 'clsx'
import { motion, AnimatePresence } from 'framer-motion'
import { aSideLeft, aSideChildrenLeft } from '@global/config/config.animation'

const SideBar = ({
  Routes,
  pageIndex,
  session,
}: {
  Routes: any[]
  pageIndex: number
  session: any
}) => {
  type tIconList =
    | 'Graph'
    | 'Activity'
    | 'Wallet'
    | 'Work'
    | 'Chat'
    | 'Folder'
    | 'Cart'

  const [showTooltip, setShowTooltip] = useState(0)
  const tooltipText = [
    'Dashboard',
    'Activity',
    'Wallet',
    'Work',
    'Chat',
    'Space',
    'Shop',
  ]

  return (
    <>
      <div className='fixed top-12 z-[300] pr-5 sm:relative sm:top-0 sm:h-full'>
        <motion.div
          className='bg-back/[0.05] flex h-16 w-[calc(100vw-7.5rem)] flex-col justify-between rounded-md border border-black/[0.07] shadow-md backdrop-blur-md dark:border-white/[0.07] dark:shadow-xl sm:h-full sm:w-12 el:w-16'
          initial={aSideLeft(true).initial}
          exit={aSideLeft(true).exit}
          animate={aSideLeft(true).animate}
          transition={aSideLeft(true).transition(0.2)}
        >
          <div className='flex w-full space-x-4 rounded-t-md bg-black/[0.07] p-3 dark:bg-white/[0.07] dark:fill-white sm:flex-col sm:space-x-0 sm:p-0 sm:pb-2 xl:py-2 el:pb-4 xl:[&>div:hover>a>svg]:-translate-y-1 xl:[&>div:hover>a>svg]:translate-x-1 xl:[&>div:hover>a>svg]:scale-125 xl:[&>div:hover>a>svg]:duration-150 xl:[&>div>a>svg]:duration-500'>
            {Routes.map((v, i) => {
              const I = Icon[v.icon as tIconList]
              return (
                <>
                  <motion.div
                    className={clsx(
                      'Anim relative w-full cursor-pointer sm:p-3 xl:p-4 el:p-5',
                      i === pageIndex
                        ? 'opacity-100'
                        : 'opacity-20 xl:hover:opacity-100',
                    )}
                    initial={aSideChildrenLeft.initial}
                    exit={aSideChildrenLeft.exit}
                    animate={aSideChildrenLeft.animate}
                    transition={aSideChildrenLeft.transition(0.9 + i * 0.1)}
                    onMouseEnter={() => setShowTooltip(i + 1)}
                    onMouseMove={() => setShowTooltip(i + 1)}
                    onMouseLeave={() => setShowTooltip(0)}
                  >
                    <Link href={'/app/' + v.path}>
                      <I />
                    </Link>
                    <AnimatePresence>
                      {showTooltip === i + 1 && (
                        <>
                          <motion.p
                            className='Card-back-md-60 absolute left-12 top-2 px-2 py-1 text-xs xl:text-xs el:left-16 el:top-3.5 el:text-base'
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                          >
                            {tooltipText[showTooltip - 1]}
                          </motion.p>
                        </>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </>
              )
            })}
          </div>
          <div className='flex justify-between p-1 px-2 dark:fill-white sm:block sm:w-full sm:p-3 el:p-5'>
            <p className='text-2xs font-bold uppercase sm:hidden'>
              {session && session.user.email.split('@')[0]}
            </p>
            <motion.div
              className={clsx(
                'Anim w-3 cursor-pointer sm:w-full',
                pageIndex === 80
                  ? 'opacity-100'
                  : 'opacity-20 xl:hover:opacity-100',
              )}
              initial={aSideChildrenLeft.initial}
              exit={aSideChildrenLeft.exit}
              animate={aSideChildrenLeft.animate}
              transition={aSideChildrenLeft.transition(1.8)}
            >
              <Link href=''>
                <Icon.Settings />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export { SideBar }

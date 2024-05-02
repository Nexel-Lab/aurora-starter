'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const CoverImage = ({
  Title,
  Img,
  ColorBg = '#000000',
}: {
  Title: string
  Img: string
  ColorBg?: string
}) => {
  const { scrollY } = useScroll()
  const Y = useTransform(scrollY, [0, 2000], [0, 1000])
  const springY = useSpring(Y, { damping: 20, mass: 0.1, stiffness: 60 })

  // const animList = {
  //   initial: { x: 100 },
  //   animate: {
  //     x: 0,
  //     transition: {
  //       when: 'beforeChildren',
  //       delay: 0,
  //       staggerChildren: 0.2,
  //     },
  //   },
  // }

  // const animItem = {
  //   initial: { opacity: 0 },
  //   animate: { opacity: 1 },
  //   transition: { type: 'tween' },
  // }

  return (
    <div
      className='relative flex h-64 overflow-hidden md:h-[20vh] xl:h-[60vh]'
      style={{ backgroundColor: ColorBg }}
    >
      <motion.div className='absolute h-full w-screen' style={{ y: springY }}>
        <Image
          src={Img}
          alt={Title}
          fill
          objectFit='cover'
          objectPosition='center center'
          quality={80}
          placeholder='blur'
          blurDataURL={
            'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
          }
        />
      </motion.div>
      <div className='Anim absolute top-0 h-80 w-screen bg-gradient-to-b from-backgroundLight-1/20 to-backgroundLight-1/0 dark:from-background-1/20 dark:to-background-1/0'></div>
      <div className='Anim absolute bottom-0 h-80 w-screen bg-gradient-to-t from-backgroundLight-1 to-backgroundLight-1/0 dark:from-background-1 dark:to-background-1/0'></div>
    </div>
  )
}

export { CoverImage }

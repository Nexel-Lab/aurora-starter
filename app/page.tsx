/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const setAnimation = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: (v: number) => ({
    delay: v,
  }),
}

const Page = () => {
  const sectionData = [
    {
      title: 'Next.js',
      icon: 'https://skillicons.dev/icons?i=nextjs',
      link: 'https://nextjs.org/',
      description:
        "Used by some of the world's largest companies, extending React functionality, and including potent Rust-based",
    },
    {
      title: 'TypeScript',
      icon: 'https://skillicons.dev/icons?i=typescript',
      link: 'https://www.typescriptlang.org/',
      description:
        'Strong typing, contemporary features, and excellent tooling make TypeScript an excellent choice for creating dependable and effective applications.',
    },
    {
      title: 'tRPC',
      icon: 'https://trpc.io/img/logo.svg',
      link: 'https://trpc.io/',
      description:
        'End-to-end typesafe APIs made easy. Experience the full power of TypeScript inference to boost productivity for your full-stack application.',
    },
    {
      title: 'MongoDB',
      icon: 'https://skillicons.dev/icons?i=mongodb',
      link: 'https://www.mongodb.com/',
      description:
        "Industry's data platform. AI-powered and event-driven apps to edge use cases and search, build fast and at the scale users demand.",
    },
    {
      title: 'Prisma',
      icon: 'https://skillicons.dev/icons?i=prisma',
      link: 'https://www.prisma.io/',
      description:
        'Next-generation Node.js and TypeScript ORM. Its intuitive data model, automated migrations, type-safety & auto-completion.',
    },
    {
      title: 'Auth.js',
      icon: 'https://next-auth.js.org/img/logo/logo-sm.png',
      link: 'https://authjs.dev/',
      description:
        'Empowers with authentication and authorization features, making it an elite choice for building secure and seamless user experiences.',
    },
    {
      title: 'Tailwind',
      icon: 'https://skillicons.dev/icons?i=tailwind',
      link: 'https://tailwindcss.com/',
      description:
        'A utility-first approach for efficient and customizable styling, Rapidly build modern websites without ever leaving your HTML.',
    },
    {
      title: 'AWS S3',
      icon: 'https://skillicons.dev/icons?i=aws',
      link: 'https://aws.amazon.com/s3/',
      description:
        'Scalable, durable, and highly available storage, making it an elite choice for managing and serving data at scale.',
    },
  ]

  return (
    <>
      <div className='relative flex w-screen flex-col items-center justify-center bg-gradient-to-r from-white to-backgroundLight-3 to-70% pt-24 dark:from-[#4e6a8a] dark:to-[#0c191c] md:h-screen md:pt-0'>
        <div className='z-10 w-full px-6 pb-24 md:px-12 md:pb-0 xl:w-[1164px] xl:px-0'>
          <section className='mr-auto pb-6 el:pb-10'>
            <h6 className='text-xl uppercase el:text-3xl'>Welcome to</h6>
            <motion.h1
              className='text-6xl font-black text-[#b23948] dark:text-[#e2fbff] el:text-8xl'
              initial={setAnimation.initial}
              animate={setAnimation.animate}
              transition={setAnimation.transition(0.4)}
            >
              AURORA APP
            </motion.h1>
            <motion.h2
              className='text-base font-light el:text-xl'
              initial={setAnimation.initial}
              animate={setAnimation.animate}
              transition={setAnimation.transition(0.6)}
            >
              <span className='opacity-80'>
                Scalability | Modularity | Full-stack typesafety
              </span>
            </motion.h2>
          </section>
          <div className='grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3'>
            {sectionData.map((v, i) => (
              <Block {...v} key={i} i={i} />
            ))}
          </div>
        </div>
        <div className='fixed bottom-3 right-0 h-[100vw] w-[100vw] fill-[#b23948] md:absolute md:bottom-0 xl:h-[100vh] xl:w-[100vh]'>
          <Logo />
        </div>
        <p className='z-50 text-xs md:fixed md:bottom-1 md:left-1/2 md:-translate-x-1/2 md:text-base'>
          <span className='opacity-40'>Developed by</span>{' '}
          <Link
            href='https://theiceji.com'
            className='Anim font-bold opacity-60 hover:opacity-100'
          >
            TheIceJi
          </Link>{' '}
          <span className='opacity-40'>/ Aurora Starter</span>{' '}
          <Link
            href='https://github.com/Aurora-App/aurora-starter'
            className='Anim font-bold opacity-60 hover:opacity-100'
          >
            Git Repo
          </Link>{' '}
          <span className='opacity-40'>/ Build</span>{' '}
          <span className='Anim font-bold opacity-60 hover:opacity-100'>
            2024.01.1301
          </span>
        </p>
      </div>
    </>
  )
}

const Block = (p: {
  title: string
  icon: string
  link: string
  description: string
  i: number
}) => {
  return (
    <motion.div
      className='w-full overflow-hidden rounded-lg border border-black/20 bg-black/[0.02] backdrop-blur-md dark:border-white/20 dark:bg-white/5'
      initial={setAnimation.initial}
      animate={setAnimation.animate}
      transition={setAnimation.transition(0.8 + p.i * 0.1)}
    >
      <div className='flex items-center space-x-4 bg-black/5 p-2 pl-5 transition-colors hover:bg-[#b23948]/20 dark:bg-white/10 dark:hover:bg-white/20'>
        <img src={p.icon} alt={p.title} className='h-8 el:h-10' />
        <h4 className='text-t3-purple-200 font-medium leading-6 md:text-lg el:text-xl'>
          <Link
            href={p.link}
            target='_blank'
            className="h-full rounded-md before:absolute before:inset-0 before:content-[''] hover:no-underline focus:no-underline active:no-underline"
          >
            {p.title}
          </Link>
        </h4>
      </div>
      <div className='h-full p-4 text-xs md:text-sm el:p-6 el:text-base'>
        {p.description}
      </div>
    </motion.div>
  )
}

const Logo = () => (
  <motion.svg
    viewBox='0 0 512 512'
    className='h-full w-full fill-inherit'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    <polygon
      points='263.96 19.95 110.66 354.83 331.19 187.39 263.96 19.95'
      fill='#fecfbb'
      opacity={0.8}
    />
    <path d='m472.07,492.91h-110.36c-28.95-26.39-66.14-40.83-105.56-40.83s-76.63,14.44-105.58,40.83H39.93c41.39-76.97,122.69-129.29,216.21-129.29,22.67,0,44.63,3.08,65.46,8.83l-24.33-54.33,80.44-36.01,94.35,210.8Z' />
  </motion.svg>
)

export default Page

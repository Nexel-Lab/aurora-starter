/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { app } from '@global/config'

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
        <div className='z-10 w-full px-6 pb-24 md:px-12 md:pb-0 lg:max-w-5xl xl:px-0'>
          <section className='mr-auto pb-6 el:pb-10'>
            <h6 className='text-xl uppercase el:text-3xl'>Welcome to</h6>
            <h1 className='text-6xl font-black text-[#b23948] dark:text-[#e2fbff] el:text-8xl'>
              AURORA APP
            </h1>
            <h2 className='text-base font-light el:text-xl'>
              <span className='opacity-80'>
                Scalability | Modularity | Full-stack typesafety
              </span>
            </h2>
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
      </div>
      <Footer />
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
    <div className='w-full overflow-hidden rounded-lg border border-black/20 bg-black/[0.02] backdrop-blur-md transition-colors dark:border-white/20 dark:bg-white/0 hover:dark:bg-[#4e6a8a]/60'>
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
    </div>
  )
}

const Logo = () => (
  <svg viewBox='0 0 512 512' className='h-full w-full fill-inherit'>
    <polygon
      points='263.96 19.95 110.66 354.83 331.19 187.39 263.96 19.95'
      fill='#fecfbb'
      opacity={0.8}
    />
    <path d='m472.07,492.91h-110.36c-28.95-26.39-66.14-40.83-105.56-40.83s-76.63,14.44-105.58,40.83H39.93c41.39-76.97,122.69-129.29,216.21-129.29,22.67,0,44.63,3.08,65.46,8.83l-24.33-54.33,80.44-36.01,94.35,210.8Z' />
  </svg>
)

const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 z-20 flex w-screen justify-center bg-gradient-to-t from-white via-white dark:from-[#4e6a8a] dark:via-[#4e6a8a] md:bg-none'>
      <div className='lg:px:0 z-50 flex h-20 w-full flex-col items-center justify-end pb-2 text-xs md:h-auto md:max-w-5xl md:flex-row md:justify-between md:px-8 md:text-base lg:px-0'>
        <p>
          <span className='opacity-40'>Developed by</span>{' '}
          <Link
            href='https://theiceji.com'
            className='Anim font-bold opacity-60 hover:opacity-100'
          >
            TheIceJi
          </Link>
        </p>

        <p>
          <span className='opacity-40'>Associate with</span>{' '}
          <Link
            href='https://nexellab.com/'
            className='Anim font-bold opacity-60 hover:opacity-100'
          >
            Nexel
          </Link>
        </p>
        {/* <br className='block lg:hidden' /> */}
        <p className='hidden lg:block'>
          <span className='opacity-40'>Build</span>{' '}
          <Link
            href='https://github.com/Nexel-Lab/aurora-starter'
            className='Anim font-bold opacity-60 hover:opacity-100'
          >
            {app.VERSION}
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Page

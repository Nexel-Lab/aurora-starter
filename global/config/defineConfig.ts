export const app = {
  NAME: 'Aurora App',
  VERSION: '1.0.0',
  UPDATE_DATE: 'Sep 5, 2023',
  Dependencies: {
    Aurora: '1.1',
    React: '18.2.0',
    NextJs: '14.0.4',
  },
  Functions: {
    useAuth: true, // Enable by default
    useCursor: false, // set to true if you want to use custom cursor
  },
  s3: {
    bucketName: process.env.S3_UPLOAD_BUCKET ?? 'aurora',
  },
}

export const metaData = {
  appName: app.NAME,
  title: 'Aurora App', // Default SEO Title
  url: 'https://aurora.theiceji.com', // URL of this website
  description:
    'Unleash Limitless Scalability and Type-Safe Mastery: Harness the Power of Next.js, Next-Auth, tRPC, Prisma, MongoDB, Redis, Tailwind, and AWS S3 Storage in Your Elite Full-Stack Framework.', // Default SEO Description
  coverImg: '/og.jpg', // Default OpenGraph Image
  author: 'TheIceJi', // SEO Author name
  keywords: [
    // Default SEO Keywords
    'Aurora',
    'Full-stack',
    'Framework',
    'NextJs',
    'Next-Auth',
    'TypeScript',
    'Typesafe',
    'tRPC',
    'App Directory',
    'Nextjs 13',
    'AppDir',
    'MongoDB',
    'Redis',
    'Prisma',
    'Tailwind',
    'AWS S3',
  ],
  twitterID: '@twitterId',
}

export const contacts = {
  facebook: 'username',
  messenger: 'username',
  instagram: 'username',
  youtube: '@username',
  mail: 'your@email.com',
  github: 'username',
  twitter: 'username',
  discord: 'groupId or userId',
}

// Customize your theme color scheme here
// It was imported to Tailwind config

export const theme = {
  defaultTheme: 'dark',
  color: {
    primary: {
      0: '#b23948',
    },
    primaryShade: {
      0: '#ACFDEF',
      1: '#75FCE5',
      2: '#51FBDE',
      3: '#04C2A2',
      4: '#038A73',
    },
    secondary: {
      0: '#C0AAFF',
      1: '#9771FF',
      2: '#7341FF',
      3: '#4300FF',
      4: '#3400C6',
    },
    background: {
      0: '#000000',
      1: '#0a0a0a',
      2: '#101010',
      3: '#1A1A1A',
    },
    backgroundLight: {
      0: '#ffffff',
      1: '#f1f1f1',
      2: '#e5e5e5',
      3: '#eeeeee',
    },
  },
}

const defineConfig = {
  metaData: metaData,
  contacts: contacts,
  app: app,
  theme: theme,
}

export default defineConfig

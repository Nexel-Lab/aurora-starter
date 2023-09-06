export const app = {
  NAME: 'Aurora App',
  VERSION: '1.0.0',
  UPDATE_DATE: 'Sep 5, 2023',
  Dependencies: {
    Aurora: '1.0',
    React: '18.2.0',
    NextJs: '13.4.19',
  },
  Functions: {
    useAuth: true,
    useCursor: false,
  },
  s3: {
    bucketName: process.env.S3_UPLOAD_BUCKET ?? 'aurora',
  },
}

export const metaData = {
  appName: app.NAME,
  title: 'Aurora App', // Default SEO Title
  url: 'https://example.com', // URL of the website
  description: 'default SEO description', // Default SEO Description
  coverImg: '/og.jpg', // Default OpenGraph Image
  author: 'default SEO author',
  keywords: ['keyword one', 'keyword two', 'keyword three'],
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

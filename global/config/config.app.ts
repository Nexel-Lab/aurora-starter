export const app = {
  NAME: 'Aurora App',
  VERSION: '2024.9.2101',
  UPDATE_DATE: 'Sep 21, 2024',
  SENTRY: {
    dsn: '',
  },
  Dependencies: {
    Aurora: '2.0.1',
    React: '18.3.1',
    NextJs: '14.2.13',
  },
  Functions: {
    useThree: true,
    useAudio: true,
    useAuth: true,
    useWeb3: true,
    useShortcuts: true,
    useModal: true,
    useCursor: false,
  },
  s3: {
    bucketName: process.env.NEXT_PUBLIC_S3_UPLOAD_ENDPOINT ?? 'aurora',
    endpoint: process.env.NEXT_PUBLIC_S3_DOWNLOAD_ENDPOINT,
  },
}

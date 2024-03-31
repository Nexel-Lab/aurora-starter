export const app = {
  NAME: 'Aurora App',
  VERSION: '2024.4.101',
  UPDATE_DATE: 'Apr 1, 2024',
  SENTRY: {
    dsn: '',
  },
  Dependencies: {
    Aurora: '2.0',
    React: '18.2.0',
    NextJs: '14.1.4',
  },
  Functions: {
    useThree: true,
    useAudio: true,
    useAuth: true,
    useWeb3: true,
  },
  s3: {
    bucketName: process.env.NEXT_PUBLIC_S3_UPLOAD_ENDPOINT ?? 'aurora',
    endpoint: process.env.NEXT_PUBLIC_S3_DOWNLOAD_ENDPOINT,
  },
}

import { withScope, captureException } from '@sentry/nextjs'

type tErrorLevel = 'fatal' | 'error' | 'warning' | 'log' | 'info' | 'debug'

const captureToSentry = (e: any, level: tErrorLevel) => {
  withScope((scope) => {
    scope.setLevel(level)
    captureException(e)
  })
}

export { captureToSentry }

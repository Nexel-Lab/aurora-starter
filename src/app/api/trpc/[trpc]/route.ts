import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { env } from '@env'
import { AppController } from '@server/controllers'
import { createTRPCContext } from '@server/trpc/trpc.context'

const handler = (request: Request) => {
  if (env.NODE_ENV === 'development') {
    console.log(`incoming request ${request.url}`)
  }
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    // res: response,
    router: AppController.router,
    createContext: createTRPCContext,
    onError:
      env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
            )
          }
        : undefined,
  })
}

export { handler as GET, handler as POST }

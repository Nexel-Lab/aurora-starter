/* eslint-disable @typescript-eslint/no-explicit-any */
import Redis from 'ioredis'

class REDIS {
  URL: string
  connection: any
  isConnected: boolean
  constructor(URL: string) {
    this.URL = URL
    this.connection
    this.isConnected = false
  }

  connect() {
    if (!process.env.REDIS_HOST)
      throw new Error('REDIS_HOST env is not missing')
    if (!process.env.REDIS_PORT)
      throw new Error('REDIS_PORT env is not missing')
    if (!process.env.REDIS_PASSWORD)
      throw new Error('REDIS_PASSWORD env is not missing')

    const {
      env: { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD },
    } = process

    if (Number.isNaN(+REDIS_PORT)) throw new Error('REDIS_PORT is not a number')

    const connect = new Redis({
      host: REDIS_HOST,
      port: +REDIS_PORT,
      password: REDIS_PASSWORD,
    })

    return connect
  }
  end() {
    this.connection.end()
  }
}

export default REDIS

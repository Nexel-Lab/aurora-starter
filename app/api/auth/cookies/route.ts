// import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { setResponse as setRes } from '@aurora/utils/server/response.status'
import cookie from 'cookie'

const POST = async (request: Request) => {
  const req = await request.json()
  try {
    if (!req.do) {
      return
    }

    if (req.do === 'set') {
      const { res, resCode, cookies, maxAge } = req
      return new NextResponse(res, {
        status: resCode,
        headers: {
          'Set-Cookie': cookie.serialize(cookies.key, cookies.value, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/',
            maxAge: maxAge,
          }),
        },
      })
    } else {
      setRes.blocked('Invalid Method')
    }
  } catch (e) {
    setRes.internalError('Authorization failed')
  }
}

export { POST }

import { NextResponse } from 'next/server'
import { ResponseCode as RES } from './response.code'

const setResponse = {
  success: (msg?: string) =>
    new NextResponse(msg ? msg : 'success', { status: RES.success }),
  created: (msg?: string) =>
    new NextResponse(msg ? msg : 'success', { status: RES.created }),
  accepted: (msg?: string) =>
    new NextResponse(msg ? msg : 'accepted', { status: RES.accepted }),
  noContent: (msg?: string) =>
    new NextResponse(msg ? msg : 'no content', { status: RES.noContent }),
  movedPermanently: (msg?: string) =>
    new NextResponse(msg ? msg : 'moved permanently', {
      status: RES.movedPermanently,
    }),
  temporaryRedirect: (msg?: string) =>
    new NextResponse(msg ? msg : 'temporary redirect', {
      status: RES.temporaryRedirect,
    }),
  permanentRedirect: (msg?: string) =>
    new NextResponse(msg ? msg : 'permanent redirect', {
      status: RES.permanentRedirect,
    }),
  badRequest: (msg?: string) =>
    new NextResponse(msg ? msg : 'bad request', { status: RES.badRequest }),
  unauthorized: (msg?: string) =>
    new NextResponse(msg ? msg : 'unauthorized', { status: RES.unauthorized }),
  blocked: (msg?: string) =>
    new NextResponse(msg ? msg : 'blocked', { status: RES.blocked }),
  notFound: (msg?: string) =>
    new NextResponse(msg ? msg : 'not found', { status: RES.notFound }),
  invalidMethod: (msg?: string) =>
    new NextResponse(msg ? msg : 'invalid method', {
      status: RES.invalidMethod,
    }),
  requestTimeout: (msg?: string) =>
    new NextResponse(msg ? msg : 'request timeout', {
      status: RES.requestTimeout,
    }),
  conflict: (msg?: string) =>
    new NextResponse(msg ? msg : 'conflict', { status: RES.conflict }),
  invalidHeader: (msg?: string) =>
    new NextResponse(msg ? msg : 'invalid header', {
      status: RES.invalidHeader,
    }),
  unprocessableEntity: (msg?: string) =>
    new NextResponse(msg ? msg : 'unprocessable entity', {
      status: RES.unprocessableEntity,
    }),
  tooManyRequestsHeader: (msg?: string) =>
    new NextResponse(msg ? msg : 'too many requests', {
      status: RES.tooManyRequestsHeader,
    }),
  internalError: (msg?: string) =>
    new NextResponse(msg ? msg : 'internal server error', {
      status: RES.internalError,
    }),
  serverError: (msg?: string) =>
    new NextResponse(msg ? msg : 'server error', { status: RES.serverError }),
}

export { setResponse }

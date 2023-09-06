const ResponseCode = {
  success: 200,
  created: 201,
  accepted: 202,
  noContent: 204,
  movedPermanently: 301,
  temporaryRedirect: 307,
  permanentRedirect: 308,
  badRequest: 400,
  unauthorized: 401,
  blocked: 403,
  notFound: 404,
  invalidMethod: 405,
  requestTimeout: 408,
  conflict: 409,
  invalidHeader: 412,
  unprocessableEntity: 422,
  tooManyRequestsHeader: 429,
  internalError: 500,
  serverError: 503,
}

export { ResponseCode }

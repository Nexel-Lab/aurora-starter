// import { app } from '@config'

// import { prisma as prismaDirect } from './connect'
// import { prisma as prismaAcc } from './connect.withAccelerate'

// export const prisma = app.Functions.useAccelerateDB ? prismaAcc : prismaDirect

export { prisma } from './connect'

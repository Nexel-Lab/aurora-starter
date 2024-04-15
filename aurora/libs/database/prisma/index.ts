import { app } from '@global/config/config.app'

import { prisma as prismaDirect } from './connect'
import { prisma as prismaAcc } from './connect.withAccelerate'

export const prisma = app.Functions.useAccelerateDB ? prismaAcc : prismaDirect

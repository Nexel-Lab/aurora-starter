import { createTRPCRouter, p } from '@server/trpc'
import { SERVICES, SCHEMA } from '@server/modules/user/profile'

export const userProfileRouter = createTRPCRouter({
  getProfileByUsername: p.publicProcedure
    .input(SCHEMA.usernameSchema)
    .query(SERVICES.getProfileByUsername),
  updateUserProfile: p.protectedProcedure
    .input(SCHEMA.updateUserProfileSchema)
    .mutation(SERVICES.updateUserProfile),
})

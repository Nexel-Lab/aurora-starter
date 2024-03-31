import { createTRPCRouter, p } from '@server/trpc'
import { SERVICE, SCHEMA } from '@server/modules/user/profile'

export const userProfileRouter = createTRPCRouter({
  getProfileByUsername: p.publicProcedure
    .input(SCHEMA.usernameSchema)
    .query(SERVICE.getProfileByUsername),
  updateUserProfile: p.protectedProcedure
    .input(SCHEMA.updateUserProfileSchema)
    .mutation(SERVICE.updateUserProfile),
})

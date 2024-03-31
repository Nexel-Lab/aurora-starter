import { createTRPCRouter, p } from '@server/trpc'
import { CONTROLLER, SCHEMA } from '@server/modules/user/profile'

export const userProfileRouter = createTRPCRouter({
  getProfileByUsername: p.publicProcedure
    .input(SCHEMA.usernameSchema)
    .query(CONTROLLER.getProfileByUsername),
  updateUserProfile: p.protectedProcedure
    .input(SCHEMA.updateUserProfileSchema)
    .mutation(CONTROLLER.updateUserProfile),
})

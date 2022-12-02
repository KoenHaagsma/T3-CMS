import { z } from 'zod';

import { router, protectedProcedure } from '../trpc';

export const userRouter = router({
  getByEmail: protectedProcedure
    .input(
      z.object({
        email: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });
    }),
});

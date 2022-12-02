import { z } from 'zod';

import { router, protectedProcedure } from '../trpc';

export const stockRouter = router({
  getById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.stockList.findMany({
        where: {
          email: input.id,
        },
      });
    }),
});

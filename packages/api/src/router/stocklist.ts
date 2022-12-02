import { z } from 'zod';

import { router, protectedProcedure } from '../trpc';

export const stockListRouter = router({
  getByEmail: protectedProcedure
    .input(
      z.object({
        email: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.stockList.findMany({
        where: {
          email: input.email,
        },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({
        email: z.string(),
        title: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.stockList.create({ data: input });
    }),
});

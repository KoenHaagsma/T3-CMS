import { z } from 'zod';

import { router, protectedProcedure } from '../trpc';

export const stockRouter = router({
  getByStockListId: protectedProcedure
    .input(
      z.object({
        stockListId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.stock.findMany({
        where: {
          stockListId: input.stockListId,
        },
      });
    }),
});

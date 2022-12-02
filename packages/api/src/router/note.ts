import { z } from 'zod';

import { router, protectedProcedure } from '../trpc';

export const noteRouter = router({
  all: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.note.findMany();
  }),

  create: protectedProcedure
    .input(
      z.object({
        message: z.string(),
        userId: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.note.create({ data: input });
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        message: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.note.update({
        where: { id: input.id },
        data: {
          message: input.message,
        },
      });
    }),

  deleteItem: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.note.delete({ where: { id: input.id } });
    }),
});

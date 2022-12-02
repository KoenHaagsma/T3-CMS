import { router } from '../trpc';
import { authRouter } from './auth';
import { stockRouter } from './stock';
import { stockListRouter } from './stocklist';
import { userRouter } from './user';

export const appRouter = router({
  stockList: stockListRouter,
  stock: stockRouter,
  auth: authRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

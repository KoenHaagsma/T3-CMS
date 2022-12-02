import SideBar from '../components/SideBar';
import { trpc } from '../utils/trpc';
import Auth from './Auth';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({ children }: any) => {
  const { data: session } = trpc.auth.getSession.useQuery();
  return (
    <main className="flex flex-row">
      <header></header>
      {session ? (
        <>
          <SideBar />
          <div className="w-full p-8">{children}</div>
        </>
      ) : (
        <Auth />
      )}
      <footer></footer>
    </main>
  );
};

export default Layout;

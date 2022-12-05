import StockList from '../components/StockList';
import { trpc } from '../utils/trpc';

type ContentProps = {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
};

const Content = ({ title }: ContentProps) => {
  const { data: session } = trpc.auth.getSession.useQuery();
  return (
    <section className="main flex w-full flex-col">
      <h2 className="text-3xl">{title}</h2>
      {!session && <section>Please login</section>}
      {session && (
        <StockList email={session.user.email ? `${session.user.email}` : ''} />
      )}
    </section>
  );
};

export default Content;

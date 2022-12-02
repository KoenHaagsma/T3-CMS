import { useRouter } from 'next/router';

const StockList = () => {
  const router = useRouter();
  const { id } = router.query;
  return <p>{id}</p>;
};

export default StockList;

import { useRouter } from 'next/router';
import { useState } from 'react';

import { trpc } from '@utils';

import StockLi from '../../components/Stock';
import Stock from '../../typescript/types/Stock';
import StockListLayout from './layout';

const StockList = () => {
  const [stock, setStock] = useState<Stock[]>([]);
  const [stockListTitle, setStockListTitle] = useState<string>('');
  const router = useRouter();
  const { id } = router.query;

  trpc.stockList.getById.useQuery(
    { id: String(id) },
    {
      onSuccess: (data) => {
        if (data) setStockListTitle(data.title);
      },
    }
  );

  trpc.stock.getByStockListId.useQuery(
    { stockListId: String(id) },
    {
      onSuccess(data) {
        setStock(data);
      },
    }
  );

  return (
    <StockListLayout>
      <h2 className="text-3xl">{stockListTitle}</h2>
      <button
        className="border-2 border-purple-600 px-6 py-1 rounded-md my-4"
        onClick={() => router.back()}
      >
        Back
      </button>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
        {stock &&
          stock.map((stock) => {
            return <StockLi key={stock.id} stock={stock} />;
          })}
      </ul>
    </StockListLayout>
  );
};

export default StockList;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: 'clb6ivg0f0004wvrg9ghlv93e' } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.id}&apikey=KNWLTS948590LRGH`
  );
  const allPostsData = await res.json();
  return {
    props: {
      allPostsData,
    },
  };
}

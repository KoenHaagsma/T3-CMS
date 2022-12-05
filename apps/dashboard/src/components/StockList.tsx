import { useAutoAnimate } from '@formkit/auto-animate/react';
import router from 'next/router';
import { useState } from 'react';

import { StockList as StockListType } from '@test/db';

import { trpc } from '../utils/trpc';
import Modal from './Modal';

type StockListProps = {
  email: string;
};

const StockList = ({ email }: StockListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [stockList, setStockList] = useState<StockListType[]>([]);
  const { mutate: addStockList } = trpc.stockList.create.useMutation();

  trpc.stockList.getByEmail.useQuery(
    { email },
    {
      onSuccess(data) {
        setStockList(data);
      },
    }
  );

  const CreateStockList = (title: string) => {
    if (title === '') return;
    addStockList(
      {
        email: email,
        title: title,
      },
      {
        onSuccess: (data) => {
          setStockList([...stockList, data]);
        },
      }
    );
  };

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  return (
    <section className="mt-4">
      {isOpen && (
        <Modal setOpen={setIsOpen} createStockList={CreateStockList} />
      )}
      <ul
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3"
      >
        <>
          {stockList &&
            stockList.map((stockList) => {
              return (
                <li
                  className="border rounded-md p-8 text-center cursor-pointer min-h-[10rem] hover:border-purple-600 hover:border-2 transition-all transition-100"
                  key={stockList.id}
                  onClick={() => router.push(`/stocklist/${stockList.id}`)}
                >
                  <h3 className="text-xl h-full text-center flex justify-center items-center">
                    {stockList.title}
                  </h3>
                </li>
              );
            })}
          <li className="border rounded-md p-8 text-center min-h-[10rem]">
            <div className="flex justify-between items-center flex-col h-full">
              <h3 className="text-xl">Add new</h3>
              <button
                className="whitespace-nowrap w-fit py-2 px-4 rounded-md bg-purple-600 hover:bg-purple-800 transition-all transition-100 text-white disabled:opacity-50"
                onClick={handleClickOpen}
              >
                Add Stocklist
              </button>
            </div>
          </li>
        </>
      </ul>
    </section>
  );
};

export default StockList;

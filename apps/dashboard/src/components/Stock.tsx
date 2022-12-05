import Stock from '../typescript/types/Stock';

type StockProps = {
  stock: Stock;
};

const StockLi = ({ stock }: StockProps) => {
  return (
    <li className="border rounded-md p-6">
      <h3 className="flex items-end">
        {stock.name}
        <span className="ml-2 text-xs flex h-fit mb-[2px]">
          <b>{stock.symbol}</b>
        </span>
      </h3>
    </li>
  );
};

export default StockLi;

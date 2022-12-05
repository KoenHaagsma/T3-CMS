type LayoutProps = {
  children: React.ReactNode;
};

const StockListLayout = ({ children }: LayoutProps) => {
  return <section>{children}</section>;
};

export default StockListLayout;

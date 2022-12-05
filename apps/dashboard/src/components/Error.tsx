import 'react-error-boundary';

const Error = ({ error, resetErrorBoundary }: any) => {
  return (
    <>
      <section>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </section>
    </>
  );
};

export default Error;

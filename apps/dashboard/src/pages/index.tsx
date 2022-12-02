import type { NextPage } from 'next';
import Head from 'next/head';

import Content from '../components/Content';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>T3-Stock Strategy</title>
        <meta name="description" content="T3-CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-row">
        <Content title={'Your Stocklists'} />
      </main>
    </>
  );
};

export default Home;

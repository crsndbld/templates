import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <h1>Home Page</h1>
      </Layout>
    </>
  );
};

export default Home;

import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

import { fetchQuery } from 'react-relay'
import { initEnvironment } from '../lib/relay'
import productListQuery from '../queries/ProductList'

export async function getServerSideProps() {
  const environment = initEnvironment()
  const queryProps = await fetchQuery(environment, productListQuery, {}).toPromise()
  return {
    props: {
      queryProps,
    },
  }
}

const Home: NextPage = (props) => {
  console.dir(props)
  return (
    <>
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <h1>Home Page</h1>
        <p>{props != null ? `商品名: ${props.queryProps.node.name}` : "Loading"}</p>
      </Layout>
    </>
  );
};

export default Home;

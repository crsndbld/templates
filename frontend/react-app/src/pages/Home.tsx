import React, { VFC } from "react";
import Layout from "../components/Layout";

export interface Home {}
type Props = {};
const Home: VFC<Props> = () => {
  return (
    <>
      <Layout>
        <p>Home</p>
      </Layout>
    </>
  );
};

export default Home;

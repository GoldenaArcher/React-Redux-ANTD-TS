import Layout from "./Layout";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);

  return (
    <Layout title="商城首页" subTitle={""}>
      {JSON.stringify(state)}
    </Layout>
  );
};

export default Home;

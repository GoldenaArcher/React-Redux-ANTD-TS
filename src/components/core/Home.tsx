import Layout from "./Layout";
import React from "react";
import { useSelector } from "react-redux";
import Search from "./Search";

const Home = () => {
  const state = useSelector((state) => state);

  return (
    <Layout title="商城首页" subTitle={""}>
      <Search />
    </Layout>
  );
};

export default Home;

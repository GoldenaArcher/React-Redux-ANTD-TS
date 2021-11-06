import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);
  
  return <Layout>{JSON.stringify(state)}</Layout>;
};

export default Home;

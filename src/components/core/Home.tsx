import Layout from "./Layout";
import React from "react";
import { useSelector } from "react-redux";
import Search from "./Search";
import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import ProductItem from "./ProductItem";

const Home = () => {
  const state = useSelector((state) => state);

  return (
    <Layout title="商城首页" subTitle={""}>
      <Search />
      <Title level={5}>最新上架</Title>
      <Row>
        <Col span="6">
          <ProductItem />
        </Col>
      </Row>
      <Title level={5}>最受欢迎</Title>
      <Row>
        <Col span="6">
          <ProductItem />
        </Col>
      </Row>
    </Layout>
  );
};

export default Home;

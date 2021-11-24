import { Col, Row, Space } from "antd";
import React from "react";
import Layout from "./Layout";
import Checkbox from "./Checkbox";
import Radiobox from "./Radiobox";

const Shop = () => {
  const filterDOM = () => (
    <Space size="middle" direction='vertical'>
      <Checkbox />
      <Radiobox />
    </Space>
  );

  return (
    <Layout title="商城页面" subTitle={""}>
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="20">right</Col>
      </Row>
    </Layout>
  );
};

export default Shop;

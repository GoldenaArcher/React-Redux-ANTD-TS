import { Button, Card, Col, Row } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import React from "react";
import { Link } from "react-router-dom";

const ProductItem = () => {
  return (
    <Card
      cover={<img src="" alt="" />}
      actions={[
        <Button>
          <Link to="">查看详情</Link>
        </Button>,
        <Button>
          <Link to="">加入购物车</Link>
        </Button>,
      ]}
    >
      <Title level={5}>ceshi</Title>
      <Paragraph ellipsis={{ rows: 2 }}>ceshi2</Paragraph>
      <Row>
        <Col span="12">销量</Col>
        <Col span="12" style={{ textAlign: "right" }}>
          价格
        </Col>
      </Row>
      <Row>
        <Col span="12">上架时间</Col>
        <Col span="12" style={{ textAlign: "right" }}>
          所属分类
        </Col>
      </Row>
    </Card>
  );
};

export default ProductItem;

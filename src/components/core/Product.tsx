import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getProductById } from "../../store/actions/product.action";
import Layout from "./Layout";

const Product = () => {
  const dispatch = useDispatch();

  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    dispatch(getProductById({ productId }));
  }, []);

  return (
    <Layout title="商品名称" subTitle="商品描述">
      <Row gutter={36}>
        <Col span="18">{productId}</Col>
        <Col span="6">right</Col>
      </Row>
    </Layout>
  );
};

export default Product;

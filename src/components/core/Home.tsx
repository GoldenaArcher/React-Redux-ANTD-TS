import Layout from "./Layout";
import Search from "./Search";
import { Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import ProductItem from "./ProductItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/actions/product.action";
import { AppState } from "../../store/reducers";
import { ProductState } from "../../store/reducers/product.reducer";

const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { createdAt, sold } = useSelector<AppState, ProductState>(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProduct("createdAt"));
    dispatch(getProduct("sold"));
  }, []);

  return (
    <Layout title="商城首页" subTitle={""}>
      <Search />
      <Title level={5}>最新上架</Title>
      <Row gutter={[16, 16]}>
        {createdAt.products.map((item) => (
          <Col span="6" key={item._id}>
            <ProductItem product={item} />
          </Col>
        ))}
      </Row>
      <Title level={5}>最受欢迎</Title>
      <Row gutter={[16, 16]}>
        {sold.products.map((item) => (
          <Col span="6" key={item._id}>
            <ProductItem product={item} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default Home;

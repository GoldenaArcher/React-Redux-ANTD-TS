import { Col, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Checkbox from "./Checkbox";
import Radiobox from "./Radiobox";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct } from "../../store/actions/product.action";
import { AppState } from "../../store/reducers";
import { ProductState } from "../../store/reducers/product.reducer";
import ProductItem from "./ProductItem";

const Shop = () => {
  const dispatch = useDispatch();

  const [myFilters, setMyFilters] = useState<{
    category: string[];
    price: number[];
  }>({ category: [], price: [] });

  const product = useSelector<AppState, ProductState>((state) => state.product);

  useEffect(() => {
    dispatch(
      filterProduct({
        filters: myFilters,
        skip: 0,
      })
    );
  }, [myFilters]);

  const filterDOM = () => (
    <Space size="middle" direction="vertical">
      <Checkbox
        handleFilter={(filters: string[]) => {
          setMyFilters({ ...myFilters, category: filters });
        }}
      />
      <Radiobox
        handleFilter={(filters: number[]) => {
          setMyFilters({ ...myFilters, price: filters });
        }}
      />
    </Space>
  );

  const productDom = () => (
    <Row gutter={[16, 16]}>
      {product.filter.result.data.map((item) => (
        <Col key={item._id} span="6">
          <ProductItem product={item} />
        </Col>
      ))}
    </Row>
  );

  return (
    <Layout title="商城页面" subTitle={""}>
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="20">{productDom()}</Col>
      </Row>
    </Layout>
  );
};

export default Shop;

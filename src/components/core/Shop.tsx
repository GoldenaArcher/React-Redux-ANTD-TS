import { Col, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Checkbox from "./Checkbox";
import Radiobox from "./Radiobox";
import { useDispatch } from "react-redux";
import { filterProduct } from "../../store/actions/product.action";

const Shop = () => {
  const dispatch = useDispatch();

  const [myFilters, setMyFilters] = useState<{
    category: string[];
    price: number[];
  }>({ category: [], price: [] });

  useEffect(() => {
    console.log(myFilters);
    dispatch(
      filterProduct({
        filter: myFilters,
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

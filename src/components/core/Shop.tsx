import { Button, Col, Empty, Row, Space } from "antd";
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

  const [skip, setSkip] = useState(0);

  const product = useSelector<AppState, ProductState>((state) => state.product);

  useEffect(() => {
    setSkip(0);
  }, [myFilters]);

  useEffect(() => {
    dispatch(
      filterProduct({
        filters: myFilters,
        skip: skip,
      })
    );
  }, [myFilters, skip]);

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

  const loadMore = () => {
    setSkip(skip + 4);
  };

  const loadMoreButton = () => {
    return (
      <Row>
        {product.filter.result.size >= 4 && (
          <Button onClick={loadMore}>加载更多</Button>
        )}
      </Row>
    );
  };

  const noData = () => {
    return <Row>{product.filter.result.size === 0 && <Empty />}</Row>;
  };

  return (
    <Layout title="商城页面" subTitle={""}>
      <Row>
        <Col span="4">{filterDOM()}</Col>
        <Col span="20">
          {productDom()}
          {loadMoreButton()}
          {noData()}
        </Col>
      </Row>
    </Layout>
  );
};

export default Shop;

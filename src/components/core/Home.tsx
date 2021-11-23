import Layout from "./Layout";
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
      {JSON.stringify(state)}
    </Layout>
  );
};

export default Home;

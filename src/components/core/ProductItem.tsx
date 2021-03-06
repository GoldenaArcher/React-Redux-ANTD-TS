import { Button, Card, Col, Row } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import Title from "antd/lib/typography/Title";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../store/models/product";
import { Image } from "antd";
import { API } from "../../config";
import moment from "moment";
import { addItem } from "../../helpers/cart";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

interface Props {
  product: Product;
  showViewProduct?: boolean;
  showCarBtn?: boolean;
}

const ProductItem: FC<Props> = ({
  product,
  showViewProduct = true,
  showCarBtn = true,
}) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    addItem(product, () => {
      dispatch(push("/cart"));
    });
  };

  const showButtons = () => {
    let buttonArray = [];
    if (showViewProduct)
      buttonArray.push(
        <Button>
          <Link to={`/product/${product._id}`}>查看详情</Link>
        </Button>
      );

    if (showCarBtn) {
      buttonArray.push(
        <Button type="link" onClick={addToCart}>
          加入购物车
        </Button>
      );
    }

    return buttonArray;
  };

  return (
    <Card
      cover={
        <Image src={`${API}/product/photo/${product._id}`} alt={product.name} />
      }
      actions={showButtons()}
    >
      <Title level={5}>{product.name}</Title>
      <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
      <Row>
        <Col span="12">销量: {product.sold}</Col>
        <Col span="12" style={{ textAlign: "right" }}>
          价格: {product.price}
        </Col>
      </Row>
      <Row>
        <Col span="12">
          上架时间: {moment(product.createdAt).format("YYYY-MM-DD")}
        </Col>
        <Col span="12" style={{ textAlign: "right" }}>
          所属分类: {product.category.name}
        </Col>
      </Row>
    </Card>
  );
};

export default ProductItem;

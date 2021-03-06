import { Typography } from "antd";
import { count } from "console";
import React, { FC, useEffect } from "react";
import { CartItem } from "../../helpers/cart";

const { Title } = Typography;

interface Props {
  cart: CartItem[];
  setTotalPrice: (price: number) => void;
}

const TotalPrice: FC<Props> = ({ cart, setTotalPrice }) => {
  const getTotalPrice = () => {
    return cart
      .reduce((curr, next) => {
        return (curr += next.price * next.count);
      }, 0)
      .toFixed(2);
  };

  useEffect(() => {
    setTotalPrice(parseFloat(getTotalPrice()));
  }, [cart]);

  return <Title level={5}>商品总价：{getTotalPrice()}</Title>;
};

export default TotalPrice;

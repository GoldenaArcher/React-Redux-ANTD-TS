import { Button, Image, Input } from "antd";
import React, { FC } from "react";
import { API } from "../../config";
import { CartItem } from "../../helpers/cart";

interface Props {
  product: CartItem;
}

const CartItemFC: FC<Props> = ({ product }) => {
  return (
    <tr className="ant-table-row">
      <td className="ant-table-cell">
        <Image
          style={{ width: "120px" }}
          src={`${API}/product/photo/${product._id}`}
        />
      </td>
      <td className="ant-table-cell">{product.name}</td>
      <td className="ant-table-cell">{product.price}</td>
      <td className="ant-table-cell">{product.category.name}</td>
      <td className="ant-table-cell">
        <Input type="number" value={product.count} />
      </td>
      <td className="ant-table-cell">
        <Button danger type="primary">
          删除
        </Button>
      </td>
    </tr>
  );
};

export default CartItemFC;

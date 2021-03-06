import { Divider, Select, Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../config";
import { isAuth } from "../../helpers/auth";
import { Jwt } from "../../store/models/auth";
import Layout from "../core/Layout";
import { Order } from "../../store/models/order";
import moment from "moment";

const { Title } = Typography;

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const { token, user } = isAuth() as Jwt;

  async function getOrders() {
    let response = await axios.get(`${API}/order/list/${user._id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    setOrders(response.data);
  }

  useEffect(() => {
    getOrders();
  }, []);

  const getOrderCount = () => {
    if (orders.length > 0) {
      return `当前订单的数量为 ${orders.length}`;
    } else {
      return `还没有订单`;
    }
  };

  const showStatus = (status: string) => {
    switch (status) {
      case "Unpaid":
        return "未付款";
      case "Paid":
        return "已付款";
      case "Shipped":
        return "已发货";
      case "Completed":
        return "已完成";
      case "Cancelled":
        return "已取消";
    }
  };

  const handleChange = (orderId: string) => (status: string) => {
    axios
      .put(
        `${API}/order/status/${user._id}`,
        {
          orderId,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        getOrders();
      });
  };

  return (
    <Layout title="订单" subTitle={getOrderCount()}>
      {orders.map((order: Order) => {
        <>
          <Title level={4}>订单ID: ${order._id}</Title>
          <table style={{ width: "100%" }}>
            <thead className="ant-table-thead">
              <tr>
                <th className="ant-table-cell">订单状态</th>
                <th className="ant-table-cell">订单号</th>
                <th className="ant-table-cell">总价</th>
                <th className="ant-table-cell">创建时间</th>
                <th className="ant-table-cell">邮寄地址</th>
                <th className="ant-table-cell">客户姓名</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              <tr className="ant-table-row">
                <td className="ant-table-cell">
                  {showStatus(order.status)}
                  <Select
                    defaultValue={order.status}
                    onChange={handleChange(order._id)}
                  >
                    <Select.Option value="Unpaid">未付款</Select.Option>
                    <Select.Option value="Paid">已付款</Select.Option>
                    <Select.Option value="Shipped">已发货</Select.Option>
                    <Select.Option value="Completed">已完成</Select.Option>
                    <Select.Option value="Cancelled">已取消</Select.Option>
                  </Select>
                </td>
                <td className="ant-table-cell">{order.trade_no}</td>
                <td className="ant-table-cell">{order.amount}</td>
                <td className="ant-table-cell">
                  {moment(order.createdAt).format("YYYY-MM-DD")}
                </td>
                <td className="ant-table-cell">{order.address}</td>
                <td className="ant-table-cell">{order.user.name}</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead className="ant-table-thead">
              <tr>
                <th className="ant-table-cell">商品名称</th>
                <th className="ant-table-cell">商品价格</th>
                <th className="ant-table-cell">商品数量</th>
                <th className="ant-table-cell">商品ID</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {order.products.map((item) => {
                const { product } = item;
                return (
                  <tr className="ant-table-row">
                    <td className="ant-table-cell">{product.name}</td>
                    <td className="ant-table-cell">{product.price}</td>
                    <td className="ant-table-cell">{item.count}</td>
                    <td className="ant-table-cell">{product._id}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Divider />
        </>;
      })}
    </Layout>
  );
};

export default Orders;

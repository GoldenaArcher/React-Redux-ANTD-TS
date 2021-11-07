import { Col, Descriptions, Menu, Row } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { Link } from "react-router-dom";
import { isAuth } from "../../helpers/auth";
import { Jwt } from "../../store/models/auth";
import Layout from "../core/Layout";
import {
  OrderedListOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const AdminDashboard = () => {
  const {
    user: { name, email },
  } = isAuth() as Jwt;

  // 添加分类 添加产品 订单列表
  const adminLinks = () => (
    <>
      <Title level={5}>管理员链接</Title>
      <Menu>
        <Menu.Item key="create-category">
          <ShoppingCartOutlined />
          <Link to="/create/category">添加分类</Link>
        </Menu.Item>
        <Menu.Item key="create-product">
          <UserOutlined />
          <Link to="">添加产品</Link>
        </Menu.Item>
        <Menu.Item key="order-list">
          <OrderedListOutlined />
          <Link to="">订单列表</Link>
        </Menu.Item>
      </Menu>
    </>
  );

  const adminInfo = () => (
    <Descriptions title="管理员信息" bordered>
      <Descriptions.Item label="昵称">{name}</Descriptions.Item>
      <Descriptions.Item label="邮箱">{email}</Descriptions.Item>
      <Descriptions.Item label="角色">管理员</Descriptions.Item>
    </Descriptions>
  );

  return (
    <Layout title="管理员 Dashboard" subTitle="">
      <Row>
        <Col span="4">{adminLinks()}</Col>
        <Col span="20">{adminInfo()}</Col>
      </Row>
    </Layout>
  );
};

export default AdminDashboard;

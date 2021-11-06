import { Button, Form, Input } from "antd";
import React from "react";
import { SignupPayload } from "../../store/actions/auth.actions";
import Layout from "./Layout";

const Signup = () => {
  const onFinish = (value: SignupPayload) => {
    console.log(value);
  };

  return (
    <Layout title="注册" subTitle={""}>
      <Form onFinish={onFinish}>
        <Form.Item name="name" label="昵称">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item name="email" label="邮箱">
          <Input />
        </Form.Item>
        <Form.Item name="注册">
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Signup;

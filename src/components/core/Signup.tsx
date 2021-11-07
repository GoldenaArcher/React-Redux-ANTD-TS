import { Button, Form, Input, Result } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  resetSignup,
  signup,
  SignupPayload,
} from "../../store/actions/auth.actions";
import { AppState } from "../../store/reducers";
import { AuthState } from "../../store/reducers/auth.reducer";
import Layout from "./Layout";

const Signup = () => {
  const dispatch = useDispatch();
  const auth = useSelector<AppState, AuthState>((state) => state.auth);

  const [form] = Form.useForm();

  const onFinish = (value: SignupPayload) => {
    dispatch(signup(value));
  };

  // 1. 注册成功，清空表单
  useEffect(() => {
    if (auth.signup.loaded && auth.signup.success) {
      form.resetFields();
    }
  }, [auth, form]);

  // 2. 注册成功，显示成功的提示信息
  const showSuccess = () => {
    if (auth.signup.loaded && auth.signup.success) {
      return (
        <Result
          key="signup-success"
          status="success"
          title="注册成功"
          extra={[
            <Button type="primary">
              <Link to="/signin">登录</Link>
            </Button>,
          ]}
        />
      );
    }
  };

  // 3. 注册失败，显示失败的提示信息
  const showError = () => {
    if (auth.signup.loaded && !auth.signup.success) {
      return (
        <Result
          key="signup-fail"
          status="warning"
          title="注册失败"
          subTitle={auth.signup.message}
        />
      );
    }
  };

  // 4. 离开页面之前，重置状态
  useEffect(() => {
    // 组件卸载时调用
    return () => {
      dispatch(resetSignup());
    };
  }, []);

  const signupForm = () => (
    <Form form={form} onFinish={onFinish}>
      <Form.Item name="name" label="昵称">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password />
      </Form.Item>
      <Form.Item name="email" label="邮箱">
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        注册
      </Button>
    </Form>
  );

  return (
    <Layout title="注册" subTitle={""}>
      {showSuccess()}
      {showError()}
      {signupForm()}
    </Layout>
  );
};

export default Signup;

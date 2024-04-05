import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Image, Input } from "antd";

import logo from "@/logo.svg";

export const SignIn: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Form
        style={{ textAlign: "center", width: "400px" }}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Image preview={false} width={300} src={logo} style={{ marginBottom: "40px" }} />

        <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" size="large" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            size="large"
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

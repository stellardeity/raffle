import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Image, Input, Modal } from "antd";

import { useLoginMutation, useRegisterMutation } from "@/entities/auth/authApi";
import logo from "@/logo.svg";

export const SignIn: React.FC = () => {
  const [login, { data, isError: isErrorLogin }] = useLoginMutation();
  const [register] = useRegisterMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [values, setValues] = useState<{ login: string; password: string }>();
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    values && register(values);
    setIsModalOpen(false);
    navigate("/");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    login(values);
    setValues(values);
  };

  useEffect(() => {
    if (isErrorLogin) {
      showModal();
    }
  }, [isErrorLogin]);

  useEffect(() => {
    if (data?.accessToken) {
      localStorage.setItem("access_token", JSON.stringify(data?.accessToken));
      navigate("/");
    }
  }, [data]);

  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Modal title="Create a new user?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}></Modal>
      <Form
        style={{ textAlign: "center", width: "400px" }}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Image preview={false} width={300} src={logo} style={{ marginBottom: "40px" }} />
        <Form.Item name="login" rules={[{ required: true, message: "Please input your Username!" }]}>
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

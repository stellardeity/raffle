import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Image, Input, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import { CatigoriesModal } from "@/features/categories-modal";
import logo from "@/logo.svg";

import { Drawer } from "./drawer";

const { Search } = Input;

export const MainLayout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const drawerHandler = () => {
    setOpen(!open);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <CatigoriesModal open={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Header style={{ backgroundColor: "#fff" }}>
        <Flex style={{ height: "100%" }} justify="space-between" align="center">
          <Flex align="center">
            <Image preview={false} width={100} src={logo} />
            <Search placeholder="Поиск" allowClear style={{ width: 400, marginLeft: 60 }} size="large" />
          </Flex>
          <Flex align="center">
            <Button onClick={showModal} icon={<PlusOutlined />} size="large" />
            <h3 onClick={() => navigate("/feed")} style={{ marginLeft: 60, cursor: "pointer" }}>
              Лента
            </h3>
            <Avatar size={50} onClick={drawerHandler} style={{ marginLeft: 60 }} icon={<UserOutlined />} />
          </Flex>
        </Flex>
      </Header>
      <Content style={{ margin: "60px 120px" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>ООО я трахнул твою мамку 2024</Footer>
      <Drawer onClose={drawerHandler} open={open} />
    </Layout>
  );
};

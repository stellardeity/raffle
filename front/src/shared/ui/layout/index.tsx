import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Image, Input, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import { Feed } from "@/pages/feed";

import { Drawer } from "./drawer";
import logo from "./logo.png";

const { Search } = Input;

export const MainLayout = () => {
  const [open, setOpen] = useState(false);

  const drawerHandler = () => {
    setOpen(!open);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ backgroundColor: "#fff" }}>
        <Flex style={{ height: "100%" }} justify="space-between" align="center">
          <Flex align="center">
            <Image width={100} src={logo} />
            <Search placeholder="input search text" allowClear style={{ width: 400, marginLeft: 60 }} size="large" />
          </Flex>
          <Flex align="center">
            <Button icon={<PlusOutlined />} size="large" />
            <h3 style={{ marginLeft: 60, cursor: "pointer" }}>Лента</h3>
            <Avatar size={50} onClick={drawerHandler} style={{ marginLeft: 60 }} icon={<UserOutlined />} />
          </Flex>
        </Flex>
      </Header>
      <Content style={{ margin: "60px 120px" }}>
        <Feed />
      </Content>
      <Footer style={{ textAlign: "center" }}>ООО я трахнул твою мамку 2024</Footer>
      <Drawer onClose={drawerHandler} open={open} />
    </Layout>
  );
};

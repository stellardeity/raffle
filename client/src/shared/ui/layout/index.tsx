import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Layout, { Content, Footer } from "antd/es/layout/layout";

import { CatigoriesModal } from "@/features/categories-modal";

import { Drawer } from "./drawer";
import { Header } from "./header";

export const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const drawerHandler = () => {
    setOpen(!open);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <CatigoriesModal open={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Header drawerHandler={drawerHandler} setIsModalOpen={setIsModalOpen} />
      <Content style={{ padding: "40px 80px" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>ООО я трахнул твою мамку 2024</Footer>
      <Drawer onClose={drawerHandler} open={open} />
    </Layout>
  );
};

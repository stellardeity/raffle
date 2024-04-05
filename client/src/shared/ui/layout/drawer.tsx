import React from "react";
import { Drawer as AntdDrawer } from "antd";

export const Drawer = ({ onClose, open }: any) => {
  return (
    <AntdDrawer title="Basic Drawer" onClose={onClose} open={open}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </AntdDrawer>
  );
};

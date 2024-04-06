import React from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Drawer as AntdDrawer } from "antd";

import { useLogoutMutation } from "@/entities/auth/authApi";

export const Drawer = ({ onClose, open }: any) => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/signin");
    localStorage.removeItem("access_token");
    logout();
  };
  return (
    <AntdDrawer
      title={<Avatar size={50} style={{ marginLeft: 60 }} icon={<UserOutlined />} />}
      onClose={onClose}
      open={open}
    >
      <h3 style={{ cursor: "pointer" }} onClick={() => navigate("/profile")}>
        Profile
      </h3>
      <h3 style={{ cursor: "pointer" }} onClick={logoutHandler}>
        Logout
      </h3>
    </AntdDrawer>
  );
};

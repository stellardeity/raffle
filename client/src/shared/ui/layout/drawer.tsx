import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Avatar, Drawer as AntdDrawer } from "antd";

import { useLogoutMutation } from "@/entities/auth/authApi";
import { useLazyGetUserProfileQuery } from "@/entities/usersApi";

export const Drawer = ({ onClose, open }: any) => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [trggerGetUser, { data: profile, isError }] = useLazyGetUserProfileQuery();

  if (isError) {
    navigate("/signin");
  }

  useEffect(() => {
    trggerGetUser();
  }, []);

  const logoutHandler = () => {
    navigate("/signin");
    logout();
  };

  const navigateHandler = (url) => {
    onClose();
    navigate(url);
  };

  return (
    <AntdDrawer
      title={<Avatar size={50} style={{ marginLeft: 60 }} src={profile?.photo} />}
      onClose={onClose}
      open={open}
    >
      <h3 style={{ cursor: "pointer" }} onClick={() => navigateHandler("/profile")}>
        {t("Profile")}
      </h3>
      <h3 style={{ cursor: "pointer" }} onClick={() => navigateHandler("/feed")}>
        {t("Feed")}
      </h3>
      <h3 style={{ cursor: "pointer" }} onClick={() => navigateHandler("/settings")}>
        {t("Settings")}
      </h3>
      <h3 style={{ cursor: "pointer" }} onClick={logoutHandler}>
        {t("Logout")}
      </h3>
    </AntdDrawer>
  );
};

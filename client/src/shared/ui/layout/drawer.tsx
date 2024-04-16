import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { Avatar, Drawer as AntdDrawer, Flex } from "antd";

import { useLogoutMutation } from "@/entities/authApi";
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
      title={
        <Flex>
          <Avatar size={60} src={profile?.photo} />
          <div style={{ marginLeft: "20px" }}>
            <p>{profile?.login}</p>
            <h3>
              {profile?.first_name} {profile?.last_name}
            </h3>
          </div>
        </Flex>
      }
      open={open}
      closable={false}
      extra={<CloseOutlined onClick={onClose} />}
    >
      <h3 style={{ cursor: "pointer", margin: "10px 0" }} onClick={() => navigateHandler("/profile")}>
        {t("Profile")}
      </h3>
      <h3 style={{ cursor: "pointer", margin: "10px 0" }} onClick={() => navigateHandler("/feed")}>
        {t("Feed")}
      </h3>
      <h3 style={{ cursor: "pointer", margin: "10px 0" }} onClick={() => navigateHandler("/settings")}>
        {t("Settings")}
      </h3>
      <h3 style={{ cursor: "pointer", margin: "10px 0" }} onClick={logoutHandler}>
        {t("Logout")}
      </h3>
    </AntdDrawer>
  );
};

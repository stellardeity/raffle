import { FC, useEffect } from "react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { MenuOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Image, Input } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";

import { useLazyGetUserProfileQuery } from "@/entities/usersApi";
import logo from "@/logo.svg";
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";

const { Search } = Input;

export const Header: FC<{ drawerHandler: any; setIsModalOpen: any }> = ({ drawerHandler, setIsModalOpen }) => {
  const navigate = useNavigate();
  const [trggerGetUser, { data: profile, isError }] = useLazyGetUserProfileQuery();
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  if (isError) {
    navigate("/signin");
  }

  useEffect(() => {
    trggerGetUser();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  if (width < 890) {
    return (
      <AntdHeader style={{ backgroundColor: "#fff", padding: "0 10px" }}>
        <Flex justify="space-between" align="center">
          <Image preview={false} width={90} src={logo} />
          <Button onClick={drawerHandler} icon={<MenuOutlined />} size="large" />
        </Flex>
      </AntdHeader>
    );
  }
  return (
    <AntdHeader style={{ backgroundColor: "#fff" }}>
      <Flex style={{ height: "100%" }} justify="space-between" align="center">
        <Flex align="center">
          <Image preview={false} width={100} src={logo} />
          <Search placeholder={t("Search")} allowClear style={{ width: 400, marginLeft: 60 }} size="large" />
        </Flex>
        <Flex align="center">
          <Button onClick={showModal} icon={<PlusOutlined />} size="large" />
          <h3 onClick={() => navigate("/feed")} style={{ marginLeft: 60, cursor: "pointer" }}>
            {t("Feed")}
          </h3>
          <Avatar size={50} onClick={drawerHandler} style={{ marginLeft: 60 }} src={profile?.photo} />
        </Flex>
      </Flex>
    </AntdHeader>
  );
};

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Avatar, Col, Row } from "antd";

import { useGetAdsProfileMutation, useLazyGetUserProfileQuery } from "@/entities/usersApi";
import { Card } from "@/shared/ui/card";

export const Profile = () => {
  const { t } = useTranslation();
  const [trggerGetUser, { data: profile, isError }] = useLazyGetUserProfileQuery();
  const [getAdsProfile, { data: ads }] = useGetAdsProfileMutation();
  const navigate = useNavigate();

  if (isError) {
    navigate("/signin");
  }

  useEffect(() => {
    trggerGetUser();
  }, []);

  useEffect(() => {
    profile?.id && getAdsProfile(profile?.id);
  }, [profile]);

  return (
    <Row gutter={[100, 0]}>
      <Col xs={{ flex: "100%" }} sm={{ flex: "50%" }} md={{ flex: "40%" }} lg={{ flex: "20%" }} xl={{ flex: "10%" }}>
        <Avatar size={264} src={profile?.photo} />
        <h1 style={{ marginTop: "20px" }}>
          {profile?.firstname} {profile?.lastname}
        </h1>
        <h3>{profile?.login}</h3>
        <p style={{ marginTop: "10px" }}>{profile?.bio}</p>
      </Col>
      <Col xs={{ flex: "100%" }} sm={{ flex: "50%" }} md={{ flex: "40%" }} lg={{ flex: "20%" }} xl={{ flex: "10%" }}>
        <h2 style={{ marginBottom: "20px" }}>{t("Your raffles")}:</h2>
        {!ads || !ads.length ? (
          <div>{t("Nothing was found")}</div>
        ) : (
          ads?.map((data: any) => <Card key={data.id} data={data} />)
        )}
      </Col>
    </Row>
  );
};

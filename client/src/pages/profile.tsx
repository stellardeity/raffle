import React, { useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";

import { useGetAdsProfileMutation, useGetUserProfileQuery } from "@/entities/usersApi";
import { Card } from "@/shared/ui/card";

export const Profile = () => {
  const { data: profile } = useGetUserProfileQuery();
  const [getAdsProfile, { data: ads }] = useGetAdsProfileMutation();

  useEffect(() => {
    profile?.id && getAdsProfile(profile?.id);
  }, [profile]);

  return (
    <Row>
      <Col span={18} push={6}>
        <h2 style={{ marginBottom: "20px" }}>Вашы рафлы:</h2>
        <Row gutter={[16, 24]}>
          {!ads ? (
            <p>Иди нахуй</p>
          ) : (
            ads?.map((data: any) => (
              <Col key={data.id} className="gutter-row" span={8}>
                <Card data={data} />
              </Col>
            ))
          )}
        </Row>
      </Col>
      <Col span={6} pull={18}>
        <Avatar size={264} icon={<UserOutlined />} />
        <h1 style={{ marginTop: "20px" }}>
          {profile?.firstname} {profile?.lastname}
        </h1>
        <h3>{profile?.login}</h3>
        <p style={{ marginTop: "10px" }}>{profile?.bio}</p>
      </Col>
    </Row>
  );
};

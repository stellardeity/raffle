import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";

import { useGetAdsQuery } from "@/entities/adsApi";
import { Card } from "@/shared/ui/card";

export const Feed = () => {
  const { data: ads } = useGetAdsQuery();
  return (
    <Row>
      <Col span={18} push={6}>
        <h2 style={{ marginBottom: "20px" }}>Вашы рафлы:</h2>
        <Row gutter={[16, 24]}>
          {!ads ? (
            <p>Иди нахуй</p>
          ) : (
            ads.map((data: any) => (
              <Col key={data.id} className="gutter-row" span={8}>
                <Card data={data} />
              </Col>
            ))
          )}
        </Row>
      </Col>
      <Col span={6} pull={18}>
        <Avatar size={264} icon={<UserOutlined />} />
        <h1 style={{ marginTop: "20px" }}>Maria Berestovaya</h1>
        <h3>creator</h3>
        <p style={{ marginTop: "10px" }}>You already know who I am</p>
      </Col>
    </Row>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";

import { useGetAdsQuery } from "@/entities/adsApi";
import { Card } from "@/shared/ui/card";

export const Feed = () => {
  const { data: ads, isError } = useGetAdsQuery();
  const navigate = useNavigate();

  if (isError) {
    navigate("/signin");
  }

  return (
    <Row gutter={[16, 24]}>
      {!ads ? (
        <p>Иди нахуй</p>
      ) : (
        ads?.map((data: any) => (
          <Col key={data.id} className="gutter-row" span={6}>
            <Card data={data} />
          </Col>
        ))
      )}
    </Row>
  );
};

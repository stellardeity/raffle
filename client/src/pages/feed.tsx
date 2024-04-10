import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";

import { useGetAdsQuery } from "@/entities/adsApi";
import { Card } from "@/shared/ui/card";

export const Feed = () => {
  const { data: ads, isError } = useGetAdsQuery();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (isError) {
    navigate("/signin");
  }

  if (!ads || !ads.length) {
    return <div>{t("Nothing was found")}</div>;
  }

  return (
    <Row gutter={[16, 24]}>
      {ads?.map((data: any) => (
        <Col
          key={data.id}
          xs={{ flex: "100%" }}
          sm={{ flex: "50%" }}
          md={{ flex: "40%" }}
          lg={{ flex: "20%" }}
          xl={{ flex: "10%" }}
        >
          <Card data={data} />
        </Col>
      ))}
    </Row>
  );
};

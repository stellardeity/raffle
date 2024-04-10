import React from "react";
import { useNavigate } from "react-router-dom";
import { Card as AntdCard, Flex } from "antd";

export const Card: React.FC<any> = ({ data }: any) => {
  const navigate = useNavigate();

  return (
    <AntdCard
      style={{ width: 320 }}
      onClick={() => navigate(`/ads/read/${data.id}`)}
      cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    >
      <h1>{data.title}</h1>

      <Flex justify="space-between" align="end">
        <div>
          <h3>{data.category}</h3>
          <p>Рафлятся: 122</p>
          <p>Мест: {data.places}</p>
        </div>
        <div style={{ textAlign: "end" }}>
          <p>Дефолтная цена: {data.default_price}</p>
          <p>
            Ставка: <span style={{ fontSize: "20px", fontWeight: 700 }}>{data.rate}</span>
          </p>
        </div>
      </Flex>
    </AntdCard>
  );
};

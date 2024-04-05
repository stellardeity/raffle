import React from "react";
import { Card as AntdCard, Flex } from "antd";

export const Card: React.FC<any> = ({ data }: any) => {
  return (
    <AntdCard cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}>
      <Flex justify="space-between" align="end">
        <div>
          <h1>{data.title}</h1>
          <h3>Художник</h3>
          <p>Рафлятся: 122</p>
          <p>Мест: 1000</p>
        </div>
        <div style={{ textAlign: "end" }}>
          <p>Дефолтная цена: 600 000</p>
          <p>
            Ставка: <span style={{ fontSize: "20px", fontWeight: 700 }}>20 000</span>
          </p>
        </div>
      </Flex>
    </AntdCard>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

import { useGetCategoriesQuery } from "@/entities/adsApi";

export const CatigoriesModal: React.FC<any> = ({ open, setIsModalOpen }) => {
  const navigate = useNavigate();
  const { data: categories, isLoading } = useGetCategoriesQuery();

  const handleOk = (value) => {
    setIsModalOpen(false);
    navigate(`/ads/create#${value}`);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  if (isLoading) {
    return null;
  }

  return (
    <Modal onCancel={handleCancel} footer={[<div key="1"></div>]} title="Выберите категорию: " open={open}>
      {categories.map((item) => (
        <h2 key={item.id} style={{ cursor: "pointer" }} onClick={() => handleOk(item.title)}>
          {item.title}
        </h2>
      ))}
    </Modal>
  );
};

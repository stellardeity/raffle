import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";

import { useGetAdsByIdMutation, useGetFieldsMutation } from "@/entities/adsApi";

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const AdsEdit: React.FC = () => {
  const [getFields, { data, isLoading }] = useGetFieldsMutation();
  const [getAdsById, { data: ads }] = useGetAdsByIdMutation();

  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const category = location.hash.split("#")[1];

  useEffect(() => {
    if (params?.id) {
      getAdsById(params.id);
    } else {
      getFields({ title: category });
    }
  }, [category]);

  if (isLoading) {
    return null;
  }
  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="vertical" style={{ maxWidth: 600 }}>
      <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload action="/upload.do" listType="picture-card">
          <button style={{ border: 0, background: "none" }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </Upload>
      </Form.Item>
      {data?.map((item) => {
        return (
          <Form.Item key={item.title} label={item.title}>
            <Input />
          </Form.Item>
        );
      })}
      {ads?.attributes?.map((item) => {
        return (
          <Form.Item key={item.name} label={item.name}>
            <Input value={item.value} />
          </Form.Item>
        );
      })}
      {/* <Form.Item label="" name="disabled" valuePropName="checked">
          <Checkbox>Ветровое стекло</Checkbox>
          <Checkbox>Кофр</Checkbox>
        </Form.Item>
        <Form.Item label="Название: ">
          <Input />
        </Form.Item>
        <Form.Item label="Введите год: ">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Описание: ">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Выберете цвет: ">
          <ColorPicker />
        </Form.Item> */}
      <Button>Сохранить</Button>
      <Button onClick={() => navigate("/feed")}>Отмена</Button>
    </Form>
  );
};

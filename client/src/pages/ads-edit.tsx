import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload } from "antd";

import { useGetFieldsMutation } from "@/entities/adsApi";

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const AdsEdit: React.FC = () => {
  const [getFields, { data, isLoading }] = useGetFieldsMutation();
  const location = useLocation();
  const category = location.hash.split("#")[1];

  useEffect(() => {
    getFields({ title: category });
  }, [category]);

  if (isLoading) {
    return null;
  }

  return (
    <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" style={{ maxWidth: 600 }}>
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
          <Form.Item key={item.field_name} label={item.field_name}>
            <Input />
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
      <Button>Отмена</Button>
    </Form>
  );
};

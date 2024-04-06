import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

export const AdsEdit: React.FC = () => {
  return (
    <>
      <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} layout="horizontal" style={{ maxWidth: 600 }}>
        <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: "none" }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="" name="disabled" valuePropName="checked">
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
        </Form.Item>
        <Button>Сохранить</Button>
      </Form>
    </>
  );
};

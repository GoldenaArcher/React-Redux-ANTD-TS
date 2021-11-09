import { Button, Divider, Form, Input, Select } from "antd";
import React from "react";

const Search = () => {
  return (
    <>
      <Form layout="inline" initialValues={{ categor: "All" }}>
        <Input.Group compact>
          <Form.Item name="category">
            <Select>
              <Select.Option value="All">所有分类</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Input placeholder="请输入搜索关键字" />
          </Form.Item>
          <Form.Item>
            <Button>搜索</Button>
          </Form.Item>
        </Input.Group>
      </Form>
      <Divider />
    </>
  );
};

export default Search;

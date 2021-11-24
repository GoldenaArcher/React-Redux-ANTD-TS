import React from "react";
import { Typography, List, Checkbox as AntdCheckbox } from "antd";

const { Title } = Typography;

const category = [{ name: "Node" }, { name: "Angular" }];

const Checkbox = () => {
  return (
    <>
      <Title level={4}>按照分类筛选</Title>
      <List
        dataSource={category}
        renderItem={(item) => (
          <List.Item>
            <AntdCheckbox>{item.name}</AntdCheckbox>
          </List.Item>
        )}
      />
    </>
  );
};

export default Checkbox;

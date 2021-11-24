import React from "react";
import { Typography, List, Radio } from "antd";

const { Title } = Typography;

const prices = [{ price: "0 - 50" }, { price: "51 - 100" }];

const Radiobox = () => {
  return (
    <>
      <Title level={4}>按照价格筛选</Title>
      <Radio.Group>
        <List
          dataSource={prices}
          renderItem={(item) => (
            <List.Item>
              <Radio>{item.price}</Radio>
            </List.Item>
          )}
        />
      </Radio.Group>
    </>
  );
};

export default Radiobox;

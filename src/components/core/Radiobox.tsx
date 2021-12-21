import React, { FC } from "react";
import { Typography, List, Radio, RadioChangeEvent } from "antd";
import { prices } from "../../helpers/price";

const { Title } = Typography;

// const prices = [{ price: "0 - 50" }, { price: "51 - 100" }];

interface Props {
  handleFilter: (arg: number[]) => void;
}

const Radiobox: FC<Props> = ({ handleFilter }) => {
  const onChange = (event: RadioChangeEvent) => {
    handleFilter(event.target.value);
  };

  return (
    <>
      <Title level={4}>按照价格筛选</Title>
      <Radio.Group>
        <List
          dataSource={prices}
          renderItem={(item) => (
            <List.Item>
              <Radio onChange={onChange} value={item.array}>
                {item.name}
              </Radio>
            </List.Item>
          )}
        />
      </Radio.Group>
    </>
  );
};

export default Radiobox;

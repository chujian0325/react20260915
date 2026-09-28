import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import { WeiboOutlined, SearchOutlined } from "@ant-design/icons";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const { RangePicker } = DatePicker;
export default class App extends Component {
  render() {
    return (
      <div>
        App
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
        <WeiboOutlined />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <DatePicker onChange={onChange} />
        <RangePicker />
      </div>
    );
  }
}

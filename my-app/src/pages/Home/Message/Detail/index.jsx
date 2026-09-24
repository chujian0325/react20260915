import React, { Component } from "react";
import { useParams, useLocation } from "react-router-dom";
import qs from "querystring";
const data = [
  { id: "01", content: "你好，北京" },
  { id: "02", content: "你好上海" },
  { id: "03", content: "你好，深圳" },
];
class Detail extends Component {
  render() {
    console.log("Detail444", this.props);
    const { id ,title} = this.props.params;
    const obj = data.find((item) => item.id === id);
    const { content } = obj;
    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {content}</li>
      </ul>
    );
  }
}

// 包装高阶层：函数组件，调用hook拿到params
function DetailWrapper() {
  const params = useParams();
  const location = useLocation();
  console.log("DetailWrapper", params, location);
  return <Detail params={params} location={location} />;
}

export default DetailWrapper;

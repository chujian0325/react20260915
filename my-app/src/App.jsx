import { Component } from "react";
import axios from "axios";

// 创建并暴露App组件
export default class App extends Component {
  getStudentData = () => {
    axios.get("/api1/students").then(
      (response) => {
        console.log('学生数据', response.data);
      },
      (error) => {
        console.log('error', error);
      },
    );
  };
  getCarData = () => {
    axios.get("/api2/cars").then(
      (response) => {
        console.log('汽车数据', response.data);
      },
      (error) => {
        console.log('error', error);
      },
    );
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生数据</button>
        <button onClick={this.getCarData}>点我获取汽车数据</button>
      </div>
    );
  }
}

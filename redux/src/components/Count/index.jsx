import React, { Component } from "react";

export default class Count extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    // this.selectNumber.value得到的是字符串，需要转为数字
    this.setState({ count: this.state.count + this.selectNumber.value * 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - this.selectNumber.value * 1 });
  };
  // 奇数再加
  incrementOdd = () => {
    if (this.state.count % 2 !== 0) {
      this.setState({ count: this.state.count + this.selectNumber.value * 1 });
    }
  };
  incrementAsync = () => {
    setTimeout(() => {
      this.setState({ count: this.state.count + this.selectNumber.value * 1 });
    }, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOdd}>当前求和为奇数时再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

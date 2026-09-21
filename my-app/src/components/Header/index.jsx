import React, { Component } from "react";
import Proptypes from "prop-types";

import "./index.css";
import { nanoid } from "nanoid";
export default class Header extends Component {
  // 对接收到的props进行类型、必要性校验
  static propTypes = {
    addTodo: Proptypes.func.isRequired,
  };

  handleKeyUp = (e) => {
    console.log(e.target.value, e.keyCode);
    const { keyCode, target } = e;
    //  如果按下的不是回车键
    if (keyCode !== 13) return;
    // 添加的任务名称不能为空
    if (!target.value.trim()) {
      alert("任务名称不能为空");
      return;
    }
    this.props.addTodo({
      id: nanoid(), //生成唯一id
      name: target.value,
      done: false,
    });
    // 清空输入框
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

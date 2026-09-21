import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  // 全选
  handleCheckAll = (e) => {
    console.log(e.target.checked);
    this.props.handleCheckAll(e.target.checked);
  };
  render() {
    const { todos, handleClearAllDone } = this.props;
    const doneCount = todos.reduce((pre, current) => {
      return pre + (current.done ? 1 : 0);
    }, 0);
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCount === total && total !== 0}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span>/全部{total}
        </span>
        <button className="btn btn-danger" onClick={handleClearAllDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}

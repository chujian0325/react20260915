import React, { Component } from "react";

import "./index.css";

export default class Item extends Component {
  state = {
    mouse: false,
  };
  // 鼠标移入移出
  handleMouse = (flag) => {
    return () => {
      // console.log(flag);
      this.setState({
        mouse: flag,
      });
    };
  };

  // 勾选
  handleChange = (id) => {
    return (event) => {
      console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked);
    };
  };

  handleDelete(id) {
    if (window.confirm("确定删除吗？")) {
      this.props.deleteTodo(id);
    }
  }
  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <div>
        <li
          style={{
            backgroundColor: mouse ? "#ddd" : "white",
          }}
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
        >
          <label>
            {/* defaultChecked只初始化一次 */}
            <input
              type="checkbox"
              checked={done}
              onChange={this.handleChange(id)}
            />
            <span>{name}</span>
          </label>
          <button
            className="btn btn-danger"
            style={{ display: mouse ? "block" : "none" }}
            onClick={() => this.handleDelete(id)}
          >
            删除
          </button>
        </li>
      </div>
    );
  }
}

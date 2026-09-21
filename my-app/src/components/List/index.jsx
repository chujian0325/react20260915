import React, { Component } from "react";
import Proptypes from "prop-types";

import Item from "../Item";
import "./index.css";
export default class List extends Component {
  // 对接收到的props进行类型、必要性校验
  static propTypes = {
    todos: Proptypes.array.isRequired,
    updateTodo: Proptypes.func.isRequired,
    deleteTodo: Proptypes.func.isRequired,
  };

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((it) => {
          return (
            <Item
              key={it.id}
              {...it}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}

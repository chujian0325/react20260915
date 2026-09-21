import { Component } from "react";
import Header from "./components/Header/index.jsx";
import List from "./components/List/index.jsx";
import Footer from "./components/Footer/index.jsx";
import "./App.css";

// 创建并暴露App组件
export default class App extends Component {
  // 状态写在哪里，操作状态的方法就写在哪里
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "学习", done: false },
      { id: "004", name: "打游戏", done: true },
    ],
  };

  // addTodo用于添加一个todo，接收的参数是todo对象
  // 如果子组件想修改父组件的数据，则父组件传递一个回调函数给子组件
  addTodo = (todoObj) => {
    this.setState({ todos: [todoObj, ...this.state.todos] });
  };

  updateTodo = (id, done) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done };
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };

  handleClearAllDone = () => {
    const todos = this.state.todos.filter((todo) => {
      return !todo.done;
    });
    this.setState({ todos });
  };

  handleCheckAll = (done) => {
    const todos = this.state.todos.map((todo) => {
      return { ...todo, done };
    });
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo_container">
        <div className="todo_warp">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            handleCheckAll={this.handleCheckAll}
            handleClearAllDone={this.handleClearAllDone}
          />
        </div>
      </div>
    );
  }
}

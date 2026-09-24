import React, { Component } from "react";
import { Link, Routes, Route, Outlet, useNavigate } from "react-router-dom";
// ========== 类组件本体 ==========
class Message extends Component {
  state = {
    messages: [
      {
        id: "01",
        title: "消息1",
      },
      {
        id: "02",
        title: "消息2",
      },
      {
        id: "03",
        title: "消息3",
      },
    ],
  };
  pushShow = (msg) => {
    // 路由跳转+paramas传参
    this.props.navigate(`/home/message/detail/${msg.id}/${msg.title}`); //push: 默认true，表示添加新路由，而不是替换当前路由
    // 路由跳转+search传参
    // this.props.navigate(`/home/message/detail?id=${msg.id}&title=${msg.title}`); //push: 默认true，表示添加新路由，而不是替换当前路由
    // 路由跳转+state传参
    // this.props.navigate(`/home/message/detail`, {
    //   state: {
    //     id: msg.id,
    //     title: msg.title,
    //   },
    // })
  };
  replaceShow = (msg) => {
    this.props.navigate(`/home/message/detail/${msg.id}/${msg.title}`, {
      replace: true, //replace: true表示替换当前路由，而不是添加新路由
    });
  };

  goBack = () => {
    this.props.navigate(-1); //返回上一级路由
  };
  goForward = () => {
    this.props.navigate(1); //前进到下一个路由
  };
  render() {
    const messages = this.state.messages;
    return (
      <div>
        <ul>
          {messages.map((message) => {
            return (
              <li key={message.id}>
                {/* 向路由组件传递params参数 */}
                <Link
                  to={`/home/message/detail/${message.id}/${message.title}`}
                >
                  {message.title}
                </Link>
                &nbsp;
                <button onClick={() => this.pushShow(message)}>push查看</button>
                &nbsp;
                <button onClick={() => this.replaceShow(message)}>
                  replace查看
                </button>
              </li>
            );
          })}
        </ul>
        {/* 子路由Detail在这里渲染 */}
        <Outlet />
        <button onClick={() => this.goBack()}>回退</button>
        <button onClick={() => this.goForward()}>前进</button>
      </div>
    );
  }
}
// ========== 包装层：函数组件调用useNavigate，传给类组件 ==========
function MessageWrapper() {
  const navigate = useNavigate();
  console.log("MessageWrapper", navigate);
  return <Message navigate={navigate} />;
}

export default MessageWrapper;

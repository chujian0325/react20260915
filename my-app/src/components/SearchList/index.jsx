import React, { Component } from "react";
import Pubsub from "pubsub-js";
export default class SearchList extends Component {
  state = {
    users: [], //初始化状态，user初始值为数组
    isFirst: true, //是否第一次进入页面
    isLoading: false, //是否正在加载中
    err: "", //保存错误信息
  };

  componentDidMount() {
    // 订阅消息
    this.token = Pubsub.subscribe("search", (msg, data) => {
      console.log('List组件收到消息', data);
      this.setState(data);
    });
  }

  componentWillUnmount() {
    Pubsub.unsubscribe(this.token); //取消订阅
  }
  render() {
    const { users, isLoading, isFirst, err } = this.state;
    return (
      <div>
        <div className="row">
          {
          isFirst ? <h2>欢迎使用，请输入内容，然后点击搜索按钮</h2>:
          isLoading ? <h2>正在加载中...</h2>:
          err ? <h2>{err}</h2>:
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a href="{user.html_url}" target="_blank">
                  <img src={user.avatar_url} style={{ width: "100px" }} />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

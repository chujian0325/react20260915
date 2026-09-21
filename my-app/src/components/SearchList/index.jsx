import React, { Component } from "react";

export default class SearchList extends Component {
  render() {
    const { users, isLoading, isFirst, err } = this.props;
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

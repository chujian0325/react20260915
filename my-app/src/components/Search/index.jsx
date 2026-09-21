import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";
export default class Search extends Component {
  onSearch = () => {
    console.log('Search组件发布消息')

    const {
      keyWordElement: { value: keyWord }, //连续的解构赋值并重命名
    } = this;
    console.log("输入的值", keyWord);
    // 发布消息
    // 发送请求前通知List更新状态
    PubSub.publish('search', {
      isFirst: false,
      isLoading: true,
    });
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        console.log(response);
        PubSub.publish('search', {
          isFirst: false,
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        PubSub.publish('search', {
          isFirst: false,
          isLoading: false,
          err: error.message,
        });
      },
    );
  };

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              ref={(c) => (this.keyWordElement = c)}
              type="text"
              placeholder="enter the name you search"
            />
            &nbsp;<button onClick={this.onSearch}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}

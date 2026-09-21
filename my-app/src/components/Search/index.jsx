import React, { Component } from "react";
import axios from "axios";
export default class Search extends Component {
  onSearch = () => {
    const {
      keyWordElement: { value: keyWord }, //连续的解构赋值并重命名
    } = this;
    console.log("输入的值", keyWord);
    this.props.updateAppState({
      isFirst: false,
      isLoading: true,
    });
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        console.log(response);

        this.props.updateAppState({
          isFirst: false,
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        this.props.updateAppState({
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

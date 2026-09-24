import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
class RouterHeader extends Component {
  goBack = () => {
    this.props.navigate(-1); //返回上一级路由
  };
  goForward = () => {
    this.props.navigate(1); //前进到下一个路由
  };
  goHome = () => {
    this.props.navigate("/"); //跳转到首页
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
              <button onClick={() => this.goBack()}>回退</button>
              <button onClick={() => this.goForward()}>前进</button>
              <button onClick={() => this.goHome()}>goHome</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function RouterHeaderWrapper() {
  const navigate = useNavigate()
  // 全部传给类组件
  return <RouterHeader navigate={navigate}/>
}

export default RouterHeaderWrapper;

import { Component } from "react";
import welcome from "./index.module.css";
export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h1 className={welcome.title}>Welcome to the app</h1>
      </div>
    );
  }
}

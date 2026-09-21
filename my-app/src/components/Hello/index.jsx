import { Component } from "react";
import hello from "./index.module.css";
export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1 className={hello.title}>Hello React</h1>
      </div>
    );
  }
}

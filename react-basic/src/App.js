import { useState } from "react";
function Son(props) {
  return (
    <div>
      this is son
      <button onClick={() => props.onGetSonMsg("hello")}>sendMsg</button>
    </div>
  );
}
const App = () => {
  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg);
  };
  const [msg, setMsg] = useState("");
  return (
    <div>
      this is app,{msg}
      {/* 父组件通过props将函数传递给子组件 */}
      <Son onGetSonMsg={getMsg}></Son>
    </div>
  );
};

export default App;

import { useState } from "react";
function A({ ongetAName }) {
  return (
    <div>
      this is A component
      <button onClick={() => ongetAName("AName")}>发送数据</button>
    </div>
  );
}
function B(props) {
  return (
    <div>
      this is B component，
      {props.name}
    </div>
  );
}
const App = () => {
  const [name, setName] = useState("");
  const getAName = (name) => {
    console.log(name);
    setName(name);
  };
  return (
    <div>
      this is app
      <A ongetAName={getAName} />
      <B name={name} />
    </div>
  );
};

export default App;

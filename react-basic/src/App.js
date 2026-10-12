import { useEffect, useState } from "react";

const App = () => {
  // 1. 没有依赖项， 初始+组件更新
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("副作用函数执行了");
  // });

  // 2.  依赖项为空数组， 初始
  // useEffect(() => {
  //   console.log("副作用函数执行了");
  // }, []);

  // 3. 传入特定依赖项， 初始+依赖项更新，只有count变化时才会触发
  useEffect(() => {
    console.log("副作用函数执行了");
  }, [count]);

  return (
    <div>
      this is app
      <button onClick={() => setCount(count + 1)}>+{count}</button>
    </div>
  );
};

export default App;

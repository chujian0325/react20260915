// useState实现一个计数器按钮
import { useState } from "react";
function App() {
  // 1.调用useState添加一个状态变量
  const [count, setCount] = useState(0);
  // 2. 点击事件回调
  const handleClick = () => {
    // 3. 调用setCount更新状态变量
    setCount(count + 1);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default App;

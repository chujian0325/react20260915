import { useSelector, useDispatch } from "react-redux";
// 导入创建action函数的方法
import { increment, decrement } from "./store/modules/counterStore";
function App() {
  const { count } = useSelector((state) => state.counter);
  // 得到dispatch方法，用于分发action
  const dispatch = useDispatch();
  return (
    <div>
      {/* 调用dispatch,提交action */}
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;

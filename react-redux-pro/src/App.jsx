import { useSelector, useDispatch } from "react-redux";
// 导入创建action函数的方法
import { increment, decrement, addNum } from "./store/modules/counterStore";
function App() {
  const { count } = useSelector((state) => state.counter);
  // 得到dispatch方法，用于分发action
  const dispatch = useDispatch();
  return (
    <div>
      {/* 调用dispatch,提交action */}
      {/* <button onClick={() => dispatch(decrement())}>-</button> */}
      {count}
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
      <button onClick={()=>{dispatch(addNum(10))}}>加10</button>
      <button onClick={()=>{dispatch(addNum(20))}}>加20</button>

    </div>
  );
}

export default App;

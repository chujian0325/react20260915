import { useReducer } from "react";
// 1. 定义reducer函数，根据不同action，返回不同的状态

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "SET":
      return (state += action.payload);
    default:
      return state;
  }
}
// 2. 组件中调用useReducer(reducer, initialState) => [state, dispatch]
// 3. 调用dispatch，通知reducer产生一个新的状态，使用这个新的状态更新UI，dispatch(action) = {type: 'xxx', payload: 'xxx'}
function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      this is a react app
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      {state}
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "SET", payload: 5 })}>+5</button>
    </div>
  );
}

export default App;

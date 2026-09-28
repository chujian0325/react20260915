import React, { Component, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/count_reducer";
// 组件内使用：useSelector 获取 state，useDispatch 派发 action
function Count() {
  // 创建ref绑定select
  const selectRef = useRef(null);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>当前求和为：{count}</h1>
      <select ref={selectRef}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;
      <button
        onClick={() => {
          console.log("点击了 +1");
          dispatch(increment(2));
        }}
      >
        +1
      </button>
      &nbsp;
      <button
        onClick={() => {
          console.log("点击了 -1");
          dispatch(decrement(1));
        }}
      >
        -1
      </button>
      &nbsp;
      {/* <button onClick={this.incrementOdd}>当前求和为奇数时再加</button> */}
      &nbsp;
      <button
        onClick={() => {
          const val = selectRef.current.value;
          console.log("选中的下拉值：", val);
          dispatch(incrementByAmount(Number(val)));
        }}
      >
        异步加
      </button>
      &nbsp;
    </div>
  );
}

export default Count;

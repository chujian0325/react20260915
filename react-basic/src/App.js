import { useEffect, useState } from "react";

// 问题：布尔值的切换逻辑，与当前组件是耦合在一起的，不方便复用
// 解决：自定义Hook，将逻辑抽象成一个函数，传入一个布尔值，返回一个布尔值，

function useToggle(initialValue) {
  // 可复用逻辑代码
  const [value, setValue] = useState(true);
  const toggle = () => {
    setValue(!value);
  };

  // 哪些状态和回调函数需要在其他组件中使用，return出去
  return {
    value,
    toggle,
  };
}

/**
 * 封装自定义hook通用思路：
 * 1. 定义一个函数，函数名以use开头
 * 2. 在函数体中封装可复用逻辑代码，
 * 3. 哪些状态和回调函数需要在其他组件中使用，return出去（以对象或者数组）
 * 4. 在用到的组件中，解构并使用
 */



const App = () => {
  const { value, toggle } = useToggle();
  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  );
};

export default App;

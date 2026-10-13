import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react'
// 导入创建action函数的方法
import { increment, decrement, addNum } from "./store/modules/counterStore";
import {  fetchChannelsList } from "./store/modules/channelStore";

function App() {
  const { count } = useSelector((state) => state.counter);
  const { channelList} = useSelector((state) => state.channel);
  // 得到dispatch方法，用于分发action
  const dispatch = useDispatch();

  // 使用useEffect触发异步请求
  useEffect(() => {
    dispatch(fetchChannelsList());
  },[dispatch])
  return (
    <div>
      {/* 调用dispatch,提交action */}
      {/* <button onClick={() => dispatch(decrement())}>-</button> */}
      {count}
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
      <button onClick={()=>{dispatch(addNum(10))}}>加10</button>
      <button onClick={()=>{dispatch(addNum(20))}}>加20</button>
      <ul>
        {
          channelList.map(item=>{
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>

    </div>
  );
}

export default App;

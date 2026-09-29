import { useSelector, useDispatch } from "react-redux";
import userSlice from "./stores/user.js";
const { setAge } = userSlice.actions;
console.log(setAge);
const Child = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      <h1>子组件-- {JSON.stringify(user)}</h1>
      <button
        onClick={() =>
          dispatch({ type: "user-slice/setAge", payload: user.age + 1 })
        }
      >
        增加
      </button>
      <button onClick={() => dispatch(setAge(user.age + 1))}>增加</button>
    </>
  );
};

export default Child;

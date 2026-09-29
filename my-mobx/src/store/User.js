import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
class User {
  // 状态（成员属性）
  name = "张三";
  age = 18;

  constructor(name, age) {
    // makeAutoObservable(this); //可以把对象转为可以被观察的对象，如果组件中要用解构，必须设置autoBind为true
    makeAutoObservable(this, {}, { autoBind: true });
  }

  // 动作（成员方法）
  // 计算出生年份
  getBronYear() {
    return new Date().getFullYear() - this.age;
  }
  changeName(newName) {
    this.name = newName;
  }

  increaseAge() {
    this.age += 1;
  }

  decreaseAge() {
    this.age -= 1;
  }
}
// 得到一个可以被观察的对象
// const user = new User("李四", 20);

export default User;
// 创建一个有观察能力的组件
const MyComponent = observer(({ store }) => {
  console.log("store", store);
  const { name, age, changeName, increaseAge, decreaseAge, getBronYear } =
    store;
  return (
    <>
      <h1>姓名：{store.name}</h1>
      <h1>年龄：{store.age}</h1>
      <button onClick={() => store.changeName("王五")}>修改姓名</button>
      <button onClick={() => store.increaseAge()}>增加年龄</button>
      <button onClick={() => store.decreaseAge()}>减少年龄</button>
      <hr />
      <h1>姓名：{name}</h1>
      <h1>年龄：{age}</h1>
      <h1>出生年份：{getBronYear()}</h1>
      <button onClick={() => changeName("王五")}>修改姓名</button>
      <button onClick={() => increaseAge()}>增加年龄</button>
      <button onClick={() => decreaseAge()}>减少年龄</button>
    </>
  );
});


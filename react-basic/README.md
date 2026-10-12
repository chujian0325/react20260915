# 一、使用create-react-app快速搭建开发环境(React18)
```bash
npm init react-app react-basic
npx create-react-app react-basic
```
将react和react-dom的版本改为18.2.0
启动项目
```bash
npm start
```
# 二、JSX
## 2.1 JSX基础-概念和本质

**什么是JSX**
概念：JSX是JavaScript和XML（HTML）的缩写，表示在JS代码中编写HTML模板结构，它是React中编写UI模板的方式
优势：
1. HTML声明式模板写法 
2. JS的可编程能力

**JSX的本质**
JSX并不是标准的JS语法，它是JS的语法糖，最终会被编译成JS代码，在浏览器中无法直接运行，需要通过解析工具(babel)解析之后才能在浏览器中运行

## 2.2 JSX基础-高频场景

**JSX中使用JS表达式**
在JSX中，可以在{}中写任何合法的JS表达式，比如变量、运算、函数调用等
1. 使用引号传递字符串
2. 使用js变量
3. 函数调用和方法调用
4. 使用js对象

注意：if语句、switch语句、变量声明属于语句，不是表达式，不能出现在{}中

**JSX中实现列表渲染**
语法：在JSX中使用原生js的map方法遍历渲染列表
```jsx
const list = [
  { id: 1, name: "Vue" },
  { id: 2, name: "React" },
  { id: 3, name: "Angular" },
];
function App() {
  return (
    <div className="App">
      {/* 渲染列表，加key */}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```
**JSX中实现条件渲染**
语法：可以通过逻辑与运算符&&、三元运算符(?:)实现基础的条件渲染
```jsx
const isLogin = false;
function App() {
  return (
    <div className="App">
      {/* 逻辑与&& */}
      {isLogin && <h1>hello world</h1>}
      {/* 三元运算符 */}
      {isLogin ? <h1>hello world</h1> : <h1>hello react</h1>}
    </div>
  );
}

```
**JSX中实现复杂条件渲染**
需求：列表中需要根据文章状态适配三种情况：单图、三图、无图三种模式
解决方案：自定义函数+if判断语句
```jsx
// 定义文章类型
const articleType = 3;
function getArticleType() {
  if (articleType === 1) {
    return <div>我是无图文章</div>;
  } else if (articleType === 2) {
    return <div>我是单图模式</div>;
  } else if (articleType === 3) {
    return <div>我是三图模式</div>;
  }
}
function App() {
  return (
    <div className="App">
      {/* 调用函数渲染不同模板 */}
      {getArticleType()}
    </div>
  );
}
```

# 三、React事件绑定
**基础绑定**
语法：on+事件名称={事件处理函数}，整体上遵循驼峰命名法
```jsx
function App() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="App">
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

```
**使用事件对象参数**
语法：在事件回调函数中设置形参e
```jsx
function App() {
  const handleClick = (e) => {
    console.log("click", e);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
```

**传递自定义参数**
语法：事件绑定的位置改成箭头函数的写法，并传参
```jsx
function App() {
  const handleClick = (name) => {
    console.log("click", name);
  };
  return (
    <div className="App">
      <button onClick={() => handleClick("why")}>click me</button>
    </div>
  );
}
```
注意：不能直接写函数调用，这里事件绑定需要一个函数引用

**同时传递事件对象和自定义参数**
语法：在事件绑定的位置传递事件实参e和自定义参数，注意顺序对应
```jsx
function App() {
  // 传递自定义参数和事件对象
  const clickHandle2 = (name, e) => {
    console.log("click", name, e);
  };
  return (
    <div className="App">
      <button onClick={(e) => clickHandle2("jack", e)}>click me</button>
    </div>
  );
}

```

# 四、React中的组件

**组件的定义**
概念：组件是React中构建UI的基本单位，它是一个可复用的函数或类，用于描述UI的一部分

在React中，组件可以是一个函数组件（首字母大写），也可以是一个类组件
```jsx
// 1. 定义组件
function Button() {
  return <button>click me</button>;
}
// 或者写成箭头函数的形式
const Button = () => {
  return <button>click me</button>;
}
function App() {
  return (
    <div className="App">
      {/* 2. 使用组件 */}
      {/* 自闭和 */}
      <Button />
      {/* 成对标签 */}
      <Button></Button>
    </div>
  );
}

```

# 五、useState
**useState基础使用**
useState是React中用于在函数组件中添加状态管理的Hook，它允许我们向组件添加一个状态变量，从而控制影响组件的渲染结果
本质：和普通JS变量不同的是，状态变量一旦发生变化，视图UI也会发生变化（数据驱动视图）


1. useState是一个函数，返回值是一个数组
2. 数组中的第一个参数是状态变量，第二个参数是set函数，用来修改状态变量
3. useState的参数将作为状态变量的初始值
```jsx
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
```

# 六、修改状态的规则

**状态不可变**
在React中，状态是不可变的，这意味着一旦状态被创建，就不能直接修改它。如果需要更新状态，必须使用set函数来创建一个新的状态值，并将新值传递给set函数。这样做可以确保React能够正确地跟踪状态的变化，并重新渲染组件。
状态被认为是只读的，我们应该始终替换它而不是修改它，直接修改不能触发视图更新

```jsx
const handleClick = () => {
  // 直接修改状态变量，不能引发视图更新
  // count++;
  // console.log(count);
  // 调用set函数更新状态变量
  setCount(count + 1);
};
```

**修改对象状态**
规则：对于对象类型的状态变量，应该始终传给set函数一个全新的对象来修改

直接修改原对象，不引发视图变化，调用set传入新对象修改状态
```jsx
import { useState } from "react";
function App() {
  const [form, setForm] = useState({
    name: "Jack",
  });

  const handleClick = () => {
    // form.name = 'Tom' // 直接修改原对象，不引发视图变化
    setForm({
      ...form,
      name: "Tom",
    });
  };
  return (
    <div className="App">
      <button onClick={handleClick}>{form.name}</button>
    </div>
  );
}

```

# 七、组件的样式处理
**组件基础样式方案**
React组件基础的样式控制有两种：
1. 行内样式（不推荐）
```jsx
<div style={{color:'red';fontSize:'20px'}}>this is a div</div>
```
2. class类名控制
```jsx
<span className="foo">this is a span</span>
```

# 八、案例：B站评论
功能：
1. 渲染评论列表
2. 删除评论
3. 渲染导航tab和高亮实现
4. 评论列表排序功能实现

**1. 渲染评论列表**
核心思路：
1. 使用useState维护评论列表
2. 使用map函数遍历渲染评论列表
**2. 实现评论删除**
需求：
1. 只有自己的评论才显示删除按钮
2. 点击删除按钮，删除对应的评论
核心思路：
1. 删除显示-条件渲染
2. 删除功能-拿到当前项id，以id为条件对评论列表做filter过滤
**3. 实现导航tab和点击高亮**
需求：点击哪个tab，哪个tab高亮
核心思路：
点击谁就把谁的type记录下来，然后和遍历时的每一项type做匹配，匹配到就设置高亮的类名
**4. 实现评论列表排序功能**
需求：点击最新，评论按照创建时间倒序排列；点击最热，评论按照点赞数倒序排列

**classnames库：优化类名控制**
classnames是一个简单的js库，可以方便的通过条件动态控制class类名
```bash
npm install classnames
```
```jsx
// classNames接收两个参数，第一个参数是静态类名，第二个参数是对象，对象中的key是动态类名，value是布尔值，如果为true则添加该类名，如果为false则不添加
<span
  className={classNames("nav-item", {
    active: type === item.type,
  })}
>
  {item.text}
</span>
  ```
# 九、受控表单绑定
**受控表单绑定**
概念：使用react组件的状态useState控制表单的状态
1. 准备一个React状态值
```jsx
const [value, setValue] = useState('')
```
2. 通过value属性绑定状态，通过onChange事件参数e.target.value获取表单值，通过调用setValue更新状态
```jsx
<input 
  type="text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

# 十、React中获取DOM
在react中获取/操作DOM，需要使用useRef，分为两步：
1. 使用useRef创建一个ref对象，并将其绑定到需要获取的DOM元素上
```jsx
const inputRef = useRef(null)
<input type="text" ref={inputRef} />
```
2. 渲染完毕后，通过inputRef.current获取DOM元素
```jsx
console.log(inputRef.current)
```
**B站发布评论：id处理和时间处理**
1. id处理：使用uuid库生成唯一id
2. ctime要求以当前时间为准，生成固定格式-dayjs
```jsx
npm install uuid
npm install dayjs
```
**清空内容并重新聚焦**
1. 清空内容-把input状态值设置为空字符串
2. 重新聚焦-拿到input的DOM元素，调用DOM元素的focus方法

# 十一、React中组件通信
**父传子**
实现步骤：
1. 父组件传递数据-在子组件标签上绑定属性
2. 子组件接收数据-通过props接收数据

**父传子-props说明**
1. props是只读的，不能修改，父组件的数据只能由父组件修改
2. props可以传递任意类型的数据，包括函数、数字、字符串、布尔值、数组、对象、JSX等


**父传子-特殊的prop children**
场景：当我们把内容嵌套在子组件标签中时，父组件会自动在名为children的props属性中接收该内容


**子传父**
核心思路：
在子组件中调用父组件的函数，并传递参数

**使用状态提升实现兄弟组件通信**
实现思路：借助状态提升机制，通过父组件进行兄弟组件之间的数据传递
1. A组件先通过子传父，把数据传递给父组件
2. 父组件再通过props把数据传递给B组件

**使用Context实现跨组件通信**
实现步骤：
1. 使用createContext创建上下文对象Ctx
2. 在顶层组件（App）中通过Ctx.Provider组件提供数据
3. 在子组件中通过useContext(Ctx)接收数据
```jsx
import { createContext, useContext } from "react";
const MsgContext = createContext();
function A() {
  return (
    <div>
      this is A component
      <B />
    </div>
  );
}
function B() {
  const msg = useContext(MsgContext);
  return <div>this is B component，{msg}</div>;
}
const App = () => {
  const msg = "this is app msg";
  return (
    <div>
      <MsgContext.Provider value={msg}>
        this is app
        <A />
      </MsgContext.Provider>
    </div>
  );
};

export default App;

```

# 十二、useEffect
useEffect是React Hook函数，用于React组件中创建不是由事件引起而是由渲染本身引起的操作，比如：数据获取、订阅或者手动更改DOM等

需求：组件渲染完毕后，立刻从服务器获取数据并显示在页面上
语法：
useEffect(() => {
  
}, [])
参数1是一个函数，可以把它叫做副作用函数，在函数内可以放置要执行的操作
参数2是一个数组（可选参数），数组中的元素是useEffect依赖的数据，当数组中的数据发生变化时，useEffect会重新执行，如果数组为空，则useEffect只会在组件渲染完毕后执行一次
```jsx
import { useEffect, useState } from "react";
const Url = "https://geek.itheima.net/v1_0/channels";

const App = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    // 获取数据
    async function getData() {
      const res = await fetch(Url);
      const list = await res.json();
      console.log(list);
      setList(list.data.channels);
    }
    getData();
  }, []);

  return (
    <div>
      this is app
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

```
**useEffect依赖项参数说明**
useEffect副作用函数的执行时机存在多种情况，根据依赖项的不同，会有不同的执行表现
1. 如果不传入依赖项，副作用函数会在组件初始渲染+组件更新时执行
2. 如果传入一个空数组，副作用函数只会在组件初始渲染完毕后执行一次
3. 如果传入一个非空数组，副作用函数会在组件渲染完毕后执行，并且当数组中的数据发生变化时，副作用函数会重新执行
```jsx
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

```

**useEffect清除副作用**
在useEffect的副作用函数中，可以返回一个清除函数，用于清除副作用,比如我们开启了一个定时器，想在组件卸载的时候清除，这个过程就叫清除副作用

说明：清除副作用的函数最常见的执行时机是在组件卸载时自动执行

```jsx
useEffect(() => {
  // 副作用函数
  const timer = setInterval(() => {
    console.log("定时器执行了");
  }, 1000);

  // 清除副作用函数
  return () => {
    clearInterval(timer)
}, [])
```

```jsx
import { useEffect, useState } from "react";

function Son() {
  // 渲染时开启一个定时器
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("定时器执行中");
    }, 1000);
    // 清除副作用
    return () => {
      // 卸载时清除定时器
      clearInterval(timer);
    };
  }, []);
  return <div>this is son</div>;
}
const App = () => {
  // 通过条件渲染模拟组件卸载
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <Son />}
      <button onClick={() => setShow(false)}>卸载Son组件</button>
    </div>
  );
};

export default App;

```


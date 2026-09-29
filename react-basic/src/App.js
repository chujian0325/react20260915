// 项目的根组件

const count = 100;
function getName() {
  return "Jack";
}
function App() {
  return (
    <div className="App">
      this is a react app
      {/* 使用引号传递字符串 */}
      {"this is message"}
      {/* 识别变量 */}
      {count}
      {/* 函数调用 */}
      {getName()}
      {/* 方法调用 */}
      {new Date().getDate()}
      {/* 使用js对象 */}
      <div style={{ color: "red" }}>this is a div</div>
    </div>
  );
}

export default App;

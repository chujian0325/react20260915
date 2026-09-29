const isLogin = false;
function App() {
  return (
    <div className="App">
      this is a react app
      {/* 逻辑与&& */}
      {isLogin && <h1>hello world</h1>}
      {/* 三元运算符 */}
      {isLogin ? <h1>hello world</h1> : <h1>hello react</h1>}
    </div>
  );
}

export default App;

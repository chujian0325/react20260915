function App() {
  // const handleClick = (e) => {
  //   console.log("click", e);
  // };
  // 事件对象作为参数传递
  const handleClick = (e) => {
    console.log("click", e);
  };
  // 传递自定义参数
  const clickHandle2 = (name, e) => {
    console.log("click", name, e);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>click me</button>
      <button onClick={(e) => clickHandle2("jack", e)}>click me</button>
    </div>
  );
}

export default App;

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

export default App;

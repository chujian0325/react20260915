// 父传子
function Son(props) {
  // props：包含父组件传递过来的所有数据
  return (
    <div>
      this is son，{props.name}，JSX:{props.children}
    </div>
  );
}
const App = () => {
  const name = "this is a app name";
  return (
    <div>
      <Son
        name={name}
        age={20}
        isTrue={false}
        children={<div>this is a children</div>}
        list={["vue", "react"]}
        cb={() => {
          console.log("this is a callback");
        }}
        obj={{ name: "this is a obj name" }}
      />
    </div>
  );
};

export default App;

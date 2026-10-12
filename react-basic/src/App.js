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

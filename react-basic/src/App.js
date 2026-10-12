import { useState } from "react";
function App() {
  const [form, setForm] = useState({
    name: "Jack",
  });

  const handleClick = () => {
    // form.name = 'Tom'
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

export default App;

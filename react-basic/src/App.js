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

export default App;

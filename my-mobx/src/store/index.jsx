import User from "./User";
// import Goods from "./Goods";

// 1.合并
class RootStore {
  constructor() {
    this.user = new User();
    // this.goods = new Goods();
  }
}

const rootStore = new RootStore();

// 2.创建上下文对象，并且封装成一个组件
const RootStoreContext = createContext();
const RootStoreProvider = ({ children }) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

export default RootStoreProvider;

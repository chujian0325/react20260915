import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      Login
      <Link to="/article">跳转到文章页面</Link>
    
      <button onClick={()=>{navigate("/article")}}>跳转到文章页面</button>
      <button onClick={()=>{navigate("/article?id=1&title=hello")}}>searchParams传参</button>

      <button onClick={()=>{navigate("/article/1001")}}>Params传参</button>

    </div>
  );
};

export default Login;
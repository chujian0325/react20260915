import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      Login
      <Link to="/article">跳转到文章页面</Link>
    
      <button onClick={()=>{navigate("/article")}}>跳转到文章页面</button>
    </div>
  );
};

export default Login;
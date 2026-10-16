// axios封装处理
import axios from "axios";

// 1. 根域名配置
// 2. 超时时间
// 3. 请求拦截器/响应拦截器

const request = axios.create({
  baseURL: "https://geek.itheima.net/v1_0",
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前，做拦截，插入一些自定义配置【参数的处理】
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做拦截
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);
export { request };

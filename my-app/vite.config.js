import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api1": {
        //遇到/api的请求，代理到http://localhost:8080
        target: "http://localhost:8080", //请求转发地址
        changeOrigin: true, //控制服务器收到的请求头中host字段的值
        rewrite: (path) => path.replace(/^\/api1/, ""), //重写请求路径（必须）
      },
      "/api2": {
        target: "http://localhost:5001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, ""),
      },
    },
  },
});

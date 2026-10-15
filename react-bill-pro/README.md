# 环境搭建
创建项目并安装必要依赖，包括下列基础包
1. Redux状态管理 - @reduxjs/toolkit 、 react-redux
2. 路由 - react-router-dom
3. 时间处理 - dayjs
4. class类名处理 - classnames
5. 移动端组件库 - antd-mobile
6. 请求插件 - axios

```bash
npm create vite@latest react-bill-pro
npm install @reduxjs/toolkit react-redux react-router-dom dayjs classnames antd-mobile axios
```
# 实现数据Mock
实现步骤：
1. 项目中安装json-server
```bash
npm i -D json-server
```
2. 准备一个json文件
3. 添加启动命令
4. 访问接口进行测试
```bash
"server": "json-server ./server/data.json --port 8888",
```




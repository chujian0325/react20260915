// 用户相关请求函数
import { request } from "../utils/request";

// 登录
export function loginApI(formData) {
  return request({
    url: "/authorizations",
    method: "post",
    data: formData,
  });
}

// 获取用户信息
export function getUserInfoApI() {
  return request({
    url: "/user/profile",
    method: "get",
  });
}

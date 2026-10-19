import { request } from "../utils/request";

export function getChannelApI() {
  return request({
    url: "/channels",
    method: "get",
  });
}

export function addArticles(data) {
  return request({
    url: "/mp/articles",
    method: "post",
    data
  });
}
// 上传图片
export function uploadImg(data) {
  return request({
    url: "/upload",
    method: "post",
    data
  });
}


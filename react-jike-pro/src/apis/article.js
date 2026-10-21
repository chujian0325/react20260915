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
// 获取文章列表
export function getArticleListAPI(params) {
  return request({
    url: "/mp/articles",
    method: "get",
    params
  });
}

// 删除
export function delArticleByIdAPI(target) {
  return request({
    url: `/mp/articles/${target}`,
    method: "delete",
  });
}
// 查询详情
export function getArticleByIdAPI(id) {
  return request({
    url: `/mp/articles/${id}`,
    method: "get",
  });
}



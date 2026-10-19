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


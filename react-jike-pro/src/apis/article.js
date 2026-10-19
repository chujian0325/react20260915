import { request } from "../utils/request";

export function getChannelApI() {
  return request({
    url: "/channels",
    method: "get",
  });
}


import {axiosDefault as api} from "./network";
import config from "../config";

export const loadAll = () =>
  api.request({
    method: "get",
    url: "/chatty/v1.0/",
    params: {token: config.token}
  });

export const sendMessage = ({message, author}) =>
  api.request({
    method: "post",
    url: "/chatty/v1.0/",
    headers: {token: config.token},
    data: {message, author}
  });

export default api;

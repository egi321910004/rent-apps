import axios from "./RAxios";

function get(url) {
  return axios.get(url);
}

function post(url, data) {
  return axios.post(url, data);
}

function put(url, data) {
  return axios.put(url, data);
}

function del(url) {
  return axios.delete(url);
}

function delWData(url, data) {
  return axios.delete(url, { data });
}

export const axiosWrapper = {
  get,
  post,
  put,
  del,
  delWData,
};

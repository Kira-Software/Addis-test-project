import axios from "axios";

export function requestGetEmployee() {
  return axios.request({
    method: "get",
    url: "http://localhost:7000",
  });
}

export function requestPostEmployee(action) {
  return axios.request({
    method: "post",
    url: "http://localhost:7000",
    data: action.payload,
  });
}

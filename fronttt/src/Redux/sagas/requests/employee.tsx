import axios from "axios";

export function requestGetEmployee() {
  return axios.request({
    method: "get",
    url: "http://localhost:80",
  });
}

export function requestPostEmployee(action) {
  return axios.request({
    method: "post",
    url: "http://localhost:80",
    data: action.payload,
  });
}

export function requestEditEmployee(action) {
  return axios.request({
    method: "patch",
    url: `http://localhost:80/${action.payload.id}`,
    data: action.payload.employee,
  });
}

export function requestDeleteEmployee(action) {
  return axios.request({
    method: "delete",
    url: `http://localhost:80/${action.payload.id}`,
    //data: action.payload.employee,
  });
}

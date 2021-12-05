import { call, put } from "redux-saga/effects";
import { setEmployee } from "../../reducer/employee";
import { requestGetEmployee, requestPostEmployee } from "../requests/employee";

export function* handleGetEmployee(action) {
  try {
    const response = yield call(requestGetEmployee);
    const { data } = response;
    yield put(setEmployee(data));
  } catch (err) {
    console.log("the error is ", err);
  }
}

export function* handlePostEmployee(action) {
  try {
    const response = yield call(requestPostEmployee, action);
    window.location.reload();
    //const { data } = response;
    //console.log("the response value is", response);
    // yield put(setEmployee(data));
  } catch (err) {
    console.log("the error is ", err);
  }
}

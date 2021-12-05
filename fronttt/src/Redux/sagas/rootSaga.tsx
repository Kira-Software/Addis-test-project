import { takeLatest } from "redux-saga/effects";
import employee, { GET_EMPLOYEE, POST_EMPLOYEE, SET_EMPLOYEE } from "../reducer/employee";
import { handleGetEmployee, handlePostEmployee,  } from "./handlers/employee";

export function* watcherSaga() {
  yield takeLatest(GET_EMPLOYEE, handleGetEmployee);
  yield takeLatest(POST_EMPLOYEE, handlePostEmployee);
}

import { call, put, takeLatest } from "redux-saga/effects";
import { loginSuccess, loginFailure, requestLogin } from "../slice/user-slice";
import axios from "axios";

function* loginSaga({ payload }) {
  try {
    const response = yield call(
      axios.post,
      "http://localhost:5000/api/cologin",
      payload
    );
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.response.data));
  }
}

export function* watchLogin() {
  yield takeLatest(requestLogin.type, loginSaga);
}

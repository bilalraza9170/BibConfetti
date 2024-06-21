// import { all, fork } from "redux-saga/effects";
// // import { watchGetUser } from "../sagas/user-saga";
// import { watchLogin } from "../sagas/auth-saga"; // Add this import

// const rootSaga = function* () {
//   yield all([
//     // fork(watchGetUser),
//     // Other forks
//     fork(watchLogin), // Include watchLogin saga
//   ]);
// };

// export default rootSaga;

import { all, fork } from "redux-saga/effects";
// import { watchGetUser } from "./user-saga";
import { watchLogin } from "./login-saga";

export default function* rootSaga() {
  yield all([
    // fork(watchGetUser),
    fork(watchLogin),
    // Other forks as necessary
  ]);
}

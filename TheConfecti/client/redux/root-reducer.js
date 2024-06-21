import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./slice/user-slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const usersPersistConfig = {
  key: "users",
  storage,
};

const persistedUserDataReducer = persistReducer(
  usersPersistConfig,
  usersReducer
);

const rootReducer = combineReducers({
  users: persistedUserDataReducer,
  // auth: authReducer,
});

// export default rootReducer;

// const rootReducer = combineReducers({
//   users: usersReducer,
//   auth: authReducer, // Include auth reducer
// });

export default rootReducer;

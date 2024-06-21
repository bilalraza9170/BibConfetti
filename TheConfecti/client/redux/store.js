// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore } from "redux-persist";
// import rootReducer from "./root-reducer";
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "./sagas/root-sagas";

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(sagaMiddleware),
// });
// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/root-sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

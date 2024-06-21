import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "../authContext"
// import { Provider } from "react-redux";
// import store from "../redux/store";
// import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
    return (
      <AuthProvider>
        <Component {...pageProps} />
        </AuthProvider>

  );
}



// import React from 'react';
// import App from 'next/app';
// import { Provider } from 'react-redux';
// import { createWrapper } from 'next-redux-wrapper';
// import store from '../redux/store'; // Adjust the path as necessary
// import "@/styles/globals.css";

// class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <Provider store={store}>
//         <Component {...pageProps} />
//       </Provider>
//     );
//   }
// }

// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);

// export default wrapper.withRedux(MyApp);

import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
import { appStore } from "./utils/Store";
import { Provider } from "react-redux";
const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./views/App";
import Update from "./views/pages/UpdateUserpage/UpdateUser"

const Root = () => {
  return (
    <BrowserRouter>
      <Update/>
      <App/>
    </BrowserRouter>
  );
};

export default Root;

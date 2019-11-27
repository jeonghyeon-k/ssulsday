import React, { useState } from "react";
import Header from "../Header/Header";
import TapBar from "../TapBar";

const PageTemplate = ({ children }) => {
  const [tap, setTap] = useState("home");
  return (
    <>
      <Header />
      {children}
      <TapBar setTap={setTap} selected={tap} />
    </>
  );
};

export default PageTemplate;

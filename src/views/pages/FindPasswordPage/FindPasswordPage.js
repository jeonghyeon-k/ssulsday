import React from "react";
import FindPasswordTemplate from "../../components/FindPassword/FindPasswordTemplate/FindPasswordTemplate";

const FindPasswordPage = ({ ...props }) => {
  return (
    <>
      <FindPasswordTemplate history={props.history} />
    </>
  );
};

export default FindPasswordPage;

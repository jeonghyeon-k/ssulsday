import React from "react";

const NotFoundPage = ({ ...props }) => {
  return <div>{props.location.pathname}</div>;
};

export default NotFoundPage;

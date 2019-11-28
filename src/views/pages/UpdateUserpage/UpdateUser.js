import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PropTypes from "prop-types";

const UpdateUser = ({ ...props }) => {

  return (
    <div >
      <Navbar />
      
      <Navbar />
    </div>
  );
};

UpdateUser.prototype = {
    validation: PropTypes.func.isRequired
};
UpdateUser.defaultProps = {
    validation: () => {
        console.log("UpdateUser validation is null");
      }
};

export default UpdateUser;

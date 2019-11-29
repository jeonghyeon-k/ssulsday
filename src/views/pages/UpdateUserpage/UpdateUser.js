import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PropTypes from "prop-types";
import Updateform from "./Updateform/Updateform";

const UpdateUser = ({ ...props }) => {

  return (
    <div >
      <Navbar />
      <Updateform type="Fix" title="이메일"/>
      <Updateform title="닉네임"/>
      <Updateform title="기존 비밀번호"/>
      <Updateform title="신규 비밀번호"/>
      <Updateform title="신규 비밀번호 재확인"/>
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

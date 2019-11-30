import React, { useState} from "react";
import PropTypes from "prop-types";
import Updateform from "./Updateform/Updateform";
import styles from "./UpdateUser.module.scss";
import classNames from "classnames/bind";
import { ApiPutUser } from "../../../repository/UserRepository";
import { Icon } from "../../components";

const UpdateUser = ({ ...props }) => {
  const cx = classNames.bind(styles);
  const [nickname, setnickname] = useState("");
  const [pwd, setpwd] = useState("");
  const [newpwd, setnewpwd] = useState("");
  const [renewpwd, setrenewpwd] = useState("");
 let userid = localStorage.getItem('userid');
 console.log(userid);
  const onClick = () => {
   if(pwd == null){
    ApiPutUser({
      user_id: userid,
      username: nickname,
    }).then(data => {
      console.log(data.data.retMsg);
    });
   }else if(pwd == renewpwd){
      ApiPutUser({
        user_id: userid,
        username: nickname,
        user_pwd: pwd,
        user_new_pwd: renewpwd
      }).then(data => {
        console.log(data.data.retMsg);
      });
    }
  };

  return (
    <div>
      <div className={cx("header")}>
        <div className={cx("header-back")}>
          <Icon type='arrow' />
        </div>
        <div className={cx("header-title")}>회원정보 수정</div>
        <div className={cx("header-btn")} onClick={onClick}>
          완료
        </div>
      </div>
      <Updateform type='Fix' title='이메일' />
      <Updateform
        title='닉네임'
        setContent={setnickname}
        id='nickname'
        value={nickname}
      />
      <Updateform
        title='기존 비밀번호'
        setContent={setpwd}
        id='pwd'
        hoder='현재 비밀번호를 입력해주세요.'
        value={pwd}
      />
      <Updateform
        title='신규 비밀번호'
        setContent={setnewpwd}
        id='newpwd'
        hoder='신규 비밀번호를 입력해주세요.'
        value={newpwd}
      />
      <Updateform
        title='신규 비밀번호 재확인'
        setContent={setrenewpwd}
        id='renewpwd'
        hoder='신규 비밀번호를 재입력해주세요.'
        value={renewpwd}
      />
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

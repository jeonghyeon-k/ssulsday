import React from "react";
import classNames from "classnames/bind";
import styles from "./Authenticationbutton.scss";

const Authenticationbutton = () => {
  const cx = classNames.bind(styles);
  
  return (
    <div>
      <input
        className={cx("Authenticationbutton")}
        placeholder='인증코드 받기'
      />
    </div>
  );
};

export default Authenticationbutton;

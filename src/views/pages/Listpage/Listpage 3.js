import React from "react";
import styles from "./Listpage.scss";
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar/Navbar";
import Ellipse from "../../components/Ellipse/Ellipse";
import Card from "../../components/Card/CardView";

const cx = classNames.bind(styles);

const Listpage = ({ ...props }) => {
  return (
    <div className={cx("Template")}>
      <Navbar />
      <Ellipse />
      <Card/>
      <Navbar />
    </div>
  );
};

Listpage.prototype = {

};

Listpage.defaultProps = {

};

export default Listpage;
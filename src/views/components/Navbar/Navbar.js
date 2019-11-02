import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import style from "./Navbar.scss";
const cx=className.bind(style);

export default function Navbar (props) {
    return (
        <div className={cx("nav")}>
            {props.children}
        </div>
    );
};
Navbar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}
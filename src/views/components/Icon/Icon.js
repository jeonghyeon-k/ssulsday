import React from "react";
import className from "className";
import PropTypes from "prop-types";
import style from "./Icon.scss";
const cx = className.bind(style);
export default function Icon (props) {
    return (
        <i className={cx("icon", props.type, props.size)} title={props.alt}/>
    )
}
Icon.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["sm","md","lg"]),
    alt: PropTypes.string,
}
Icon.defaultProp = {
    type: "test",
    size: "md",
    alt: ""
}
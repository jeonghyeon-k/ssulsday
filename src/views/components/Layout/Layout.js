import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
export default function Layout (props) {
    return (
<<<<<<< HEAD
        <div style={props.style} className={props.className} >
=======
        <div style={props.style} className={classNames(props.className)} >
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
            {props.children}
        </div>
    )
}

Layout.propsTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    style: PropTypes.style,
    className: PropTypes.string,
}
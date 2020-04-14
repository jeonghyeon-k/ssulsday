import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
export default function Layout (props) {
    return (
<<<<<<< HEAD
        <div style={props.style} className={props.className} >
=======
        <div style={props.style} className={classNames(props.className)} >
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
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
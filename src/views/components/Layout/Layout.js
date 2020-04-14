import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
export default function Layout (props) {
    return (
<<<<<<< HEAD
        <div style={props.style} className={props.className} >
=======
        <div style={props.style} className={classNames(props.className)} >
<<<<<<< HEAD
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
>>>>>>> 30eb86ba6d791d236d98eb973ac55f802711e742
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
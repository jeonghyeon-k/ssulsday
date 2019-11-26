import React from "react";
import PropTypes from "prop-types"
export default function Header (props) {
    return (
        <header style={props.style} className={props.className} >
            {props.children}
        </header>
    )
}

Header.propsTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    style: PropTypes.style,
    className: PropTypes.string,
}
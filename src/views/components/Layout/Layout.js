import React from "react";
import PropTypes from "prop-types"
export default function Layout (props) {
    return (
        <div style={props.style} className={props.prefix} >
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
    prefix: PropTypes.string,
}
import React from "react";
import PropTypes from "prop-types";
export default function Text (props) {
    return (
        <span>
            {props.children}
        </span>
    )
}
Text.propsTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
}
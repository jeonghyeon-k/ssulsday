import React from "react";
import PropTypes from "prop-types"
export default function Content (props) {
    return (
        <section style={props.style} className={props.prefix} >
            {props.children}
        </section>
    )
}

Content.propsTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    style: PropTypes.style,
    prefix: PropTypes.string,
}
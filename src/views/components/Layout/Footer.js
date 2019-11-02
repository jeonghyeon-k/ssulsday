import React from "react";
import PropTypes from "prop-types"
export default function Footer (props) {
    return (
        <section style={props.style} className={props.prefix} >
            {props.children}
        </section>
    )
}

Footer.propsTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    style: PropTypes.style,
    prefix: PropTypes.string,
}
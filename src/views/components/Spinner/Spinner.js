import React from "react";
import Icon from "../Icon/Icon";
import style from "./Spinner.scss";
import classNames from "classnames";
const cx = classNames.bind(style);
export default function Spinner (props) {
    return (
        <div className={cx("spinner__wrapper")} >
<Icon type={"spin"} className={cx("spinner")}/>
        </div>
        
    )
}
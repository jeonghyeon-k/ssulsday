import React from "react";
import classNames from "classnames/bind";
<<<<<<< HEAD
import styles from "./Authenticationbutton.scss";
=======
import styles from "./Authenticationbutton.module.scss";
<<<<<<< HEAD
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
>>>>>>> 30eb86ba6d791d236d98eb973ac55f802711e742
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

<<<<<<< HEAD
<<<<<<< HEAD
const Authenticationbutton = ({ done }) => {
  return (
    <div className={cx("Authenticationbutton", done && "done")}>
      {" "}
=======
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
const Authenticationbutton = ({ ...props }) => {
  const handleAuthButton = () => {
    props.isValidation && props.setGetAuth(true);
  };
  return (
    <div
      className={cx("Authenticationbutton", props.isValidation && "done")}
      onClick={handleAuthButton}
    >
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d7e7b2f50f3814acf5340074ad219a8535826ddf
=======
>>>>>>> 22ca58d55e2eb09bcbf6da40d39d0a98d9d440c9
<<<<<<< HEAD
>>>>>>> 02a28b3d49241f9e5a868ef7549465835021e13c
=======
>>>>>>> 303696e9bff3eba3a4854d3b6281eeb9861cd24d
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
=======
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
=======
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
>>>>>>> 30eb86ba6d791d236d98eb973ac55f802711e742
      인증코드받기
    </div>
  );
};

Authenticationbutton.propTypes = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 30eb86ba6d791d236d98eb973ac55f802711e742
<<<<<<< HEAD
  done: PropTypes.required
=======
  done: PropTypes.bool
>>>>>>> d7e7b2f50f3814acf5340074ad219a8535826ddf
=======
<<<<<<< HEAD
  done: PropTypes.required
>>>>>>> f25040b2071d69a125aec6f6920229b1ed02e1b5
=======
=======
  done: PropTypes.required
=======
>>>>>>> 0dc6a91f2b4c9402774476c37cfb10ffbd2e5ad7
  done: PropTypes.bool
>>>>>>> fff5b4d097368a31b51ca3978e071f61c3c1a455
>>>>>>> 30eb86ba6d791d236d98eb973ac55f802711e742
};

Authenticationbutton.defaultProps = {
  done: false
};

export default Authenticationbutton;

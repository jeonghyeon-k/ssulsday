import React ,{useState,useEffect} from "react";
import styles from "./Listpage.scss";
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar/Navbar";
import Ellipse from "../../components/Ellipse/Ellipse";
import Card from "../../components/Card/CardView";
import { getCardList } from "../../../repository/CardRepository";

const cx = classNames.bind(styles);

const Listpage = ({ ...props }) => {

const response = getCardList();
console.log(response);
  const [cards, setCards] = useState(null);
  //setCards(reponse.data);
  return (
    <div className={cx("Template")}>
      <Navbar />
      <Ellipse />
      <Card/>
      <Navbar />
    </div>
  );
};

Listpage.prototype = {

};

Listpage.defaultProps = {

};

export default Listpage;

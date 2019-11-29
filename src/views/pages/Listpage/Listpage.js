import React, { useState, useEffect } from "react";
import styles from "./Listpage.scss";
import classNames from "classnames/bind";
import Navbar from "../../components/Navbar/Navbar";
import Ellipse from "../../components/Ellipse/Ellipse";
import Card from "../../components/Card/CardView";
import { getCardList } from "../../../repository/CardRepository";

const cx = classNames.bind(styles);

const Listpage = ({ ...props }) => {
  const [cards, setCards] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        getCardList().then(data => {
          const response = data.data;
          console.log(response);
          setCards(response);
        });
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!cards) return null;
  return (
    <div className={cx("Template")}>
      <Navbar />
      <Ellipse />
      {cards.map(card => (
        <Card
          title={card.card_title}
          contents={card.card_content}
          hashtags={card.hashtags}
          spot={""}
          date={""}
          comentcounte={card.commentcount}
          likecount={card.viewcount}
          viewcount={card.likecount}
        />
      ))}
      <Navbar />
    </div>
  );
};

Listpage.prototype = {};

Listpage.defaultProps = {};

export default Listpage;

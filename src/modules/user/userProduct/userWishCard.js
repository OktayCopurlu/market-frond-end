import React from "react";
import "../userPage/personalPage.css";
import WishCard from "../../../components/cards/wishCards";

export default function UserWishCard(props) {
  const wishes = props.wishes;

  return wishes.map((element, index) => {
    return (
      <div className="user-wish-card w-100 mb-5" key={index}>
        <WishCard element={{ element, index }} />
      </div>
    );
  });
}

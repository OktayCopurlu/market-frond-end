import React from "react";
import DeleteProduct from "../../product/deleteProduct/deleteProduct";
import "../userPage/personalPage.css";
import WishCard from "../../../components/cards/wishCard";
import EditWishModal from "../../wish/editWish/editWishModal";

export default function UserWishCard(props) {
  const wishes = props.wishes;

  
 

  return (
    <>
      {wishes.map((element, index) => {
        return (
          <div key={index} className="w-100">
            <WishCard element={{ element, index }} />
            <EditWishModal value={element._id}/>
            <DeleteProduct value={element._id} />
          </div>
        );
      })}
    </>
  );
}

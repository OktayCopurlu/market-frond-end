import React, { useState, useEffect } from "react";
import * as userService from "../../services/users-service";
import UserInfoInWishCard from "../../moduls/wish/listWish/userInfoInWishCard";
import {Link} from "react-router-dom"
export default function WishCard(props) {
  const { element, index } = props.element;
  const [picture, setPicture] = useState([]);

  const showPicture = async () => {
    try {
      const user = await userService.getUsers();
      const userArray = await user;
      return await setPicture(userArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showPicture();
  }, []);
  return (
    <div key={index} className="wishCard col-6">
      <div className="wishDetail ">
        <h5 className="wishDetail mb-1">{element.title}</h5>
        <p className="wishDetail mb-1">{element.detail}</p>
        <p className="wishDetail">
          {element.canton},{element.city}
        </p>
        <Link href="#" className="wishDetail d-block">
          <i className="fas fa-phone"></i> {element.contactTel}
        </Link>
        <Link href="#" className="wishDetail d-block">
          <i className="fas fa-envelope"></i> {element.contactEmail}
        </Link>
      </div>
      <div className="wishPhoto">
        {picture.map((user) => {
          if (user.user_id === element.userId) {
            return <UserInfoInWishCard key={user.user_id} user={user} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}

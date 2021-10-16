import React, { useState, useEffect, useContext } from "react";
import "./personalPage.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import * as userService from "../../../services/users-service";
import UserDetailCard from "./userDetailCard";
import { useTranslation } from "react-i18next";
import productContext from "../../../context/productContext";

export default function PersonalPage() {
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const [userMetadata, setUserMetadata] = useState(null);
  const { user, getAccessTokenSilently } = useAuth0();
  const { t } = useTranslation();
  const ProductContext = useContext(productContext);
  
  useEffect(() => {
    const readUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: audience,
          scope: "read:current_user",
        });
        const data = await userService.getUserMetadata(user, accessToken);
        return setUserMetadata(data);
      } catch (error) {
        console.log(error);
      }
    };
    return readUserMetadata();
  }, [user, getAccessTokenSilently, audience]);
  const clean = () => {
    ProductContext.productHandler("");
  };
  return (
    <>
      <div className="out-container">
        {userMetadata ? (
          <UserDetailCard element={userMetadata} />
        ) : (
          <h3 className="m-5">Loading...</h3>
        )}
      </div>
      <div className="user-page-links-container">
        <div className="d-flex justify-content-between user-page-links-parent">
          <Link
            to="/my-products"
            onClick={clean}
            className="btn user-page-link mr-4"
          >
            {t("MyProduct")}
          </Link>
          <Link
            to="/my-wishes"
            onClick={clean}
            className="btn user-page-link mr-4"
          >
            {t("MyWish")}
          </Link>
          <Link
            to="/edit-my-detail"
            onClick={clean}
            className="btn user-page-link"
          >
            {t("EditMyDetail")}
          </Link>
        </div>
      </div>
    </>
  );
}

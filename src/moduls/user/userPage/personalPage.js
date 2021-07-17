import React, { useState, useEffect } from "react";
import "./personalPage.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import * as userService from "../../../services/users-service";
import UserDetailCard from "./userDetailCard";
import { useTranslation } from "react-i18next";

export default function PersonalPage() {
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const [userMetadata, setUserMetadata] = useState(null);
  const { user, getAccessTokenSilently } = useAuth0();
  const { t } = useTranslation();

  useEffect(() => {
    const readUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: audience,
          scope: "read:current_user",
        });
        const data = await userService.getUserMetadata(user, accessToken);
        return await setUserMetadata(data);
      } catch (error) {
        console.log(error);
      }
    };
    return readUserMetadata();
  }, [user, getAccessTokenSilently, audience]);

  return (
    <>
      <div className="out-container">
        {userMetadata ? (
          <UserDetailCard element={userMetadata} />
        ) : (
          <h3 className="m-5">Loading...</h3>
        )}
      </div>
      <div className="bg-secondary">
        <hr />
        <div className="d-flex justify-content-center ">
          <Link to="/my-products" className="text-light mr-5">
            <h4 className="text-center p-0">{t("MyProduct")}</h4>
          </Link>
          <Link to="/my-wishes" className=" text-light">
            <h4 className="text-center mr-5 p-0">{t("MyWish")}</h4>
          </Link>
          <Link to="/edit-my-detail" className="text-light ">
            <h4 className="p-0">{t("EditMyDetail")}</h4>
          </Link>
        </div>
        <hr />
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";
import "./personalPage.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import MainModal from "../editUser/mainModal";
import * as userService from "../../../services/users-service";
import UserDetailCard from "./userDetailCard";
import {useTranslation} from "react-i18next";

export default function PersonalPage() {
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const [userMetadata, setUserMetadata] = useState(null);
  const { user, getAccessTokenSilently } = useAuth0();
  const {t}= useTranslation()
  
  useEffect(() => {
  
    const something = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: audience,
          // scope: "read:current_user_metadata",
        });
        const data = await userService.getUserMetadata(
          user,
          accessToken
        );
        return await setUserMetadata(data);  
      } catch (error) {
        console.log(error)
      }
      
    };
    return something();
  }, [user, getAccessTokenSilently,audience]);

  return (
    <>
      <div className="out-container">
        {userMetadata ? (
          <UserDetailCard element={userMetadata} />
        ) : (
          <h3 className="m-5">Loading...</h3>
        )}
        <MainModal />
      </div>
      <Link to="/my-products" className=" text-info"><h3 className="text-center p-0">{t('MyProduct')}</h3></Link>
      <Link to="/my-wishes" className=" text-info"><h3 className="text-center p-0">{t('MyWish')}</h3></Link> 
    </>
  );
}

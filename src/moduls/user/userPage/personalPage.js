import React, { useState, useEffect, useContext } from "react";
import "./personalPage.css";
import Context from "../../../context/context";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import MainModal from "../editUser/mainModal";
import * as userService from "../../../services/users-service";
import UserDetailCard from "./userDetailCard";
import {useTranslation} from "react-i18next";

export default function PersonalPage() {
  const context = useContext(Context);
  const [userMetadata, setUserMetadata] = useState(null);
  const { user, getAccessTokenSilently } = useAuth0();
  const {t}= useTranslation()
  
  useEffect(() => {
    const userId = user.sub;
    userService
      .getUserMetadata(userId, getAccessTokenSilently, context)
      .then((data) => {
        setUserMetadata(data);
      });
      // eslint-disable-next-line
  }, [getAccessTokenSilently]);

  return (
    <>
      <div className="out-container">
        <UserDetailCard element={userMetadata} />
        <MainModal />
      </div>
      <Link to="/my-products" className=" text-info"><h3 className="text-center p-0">{t('MyProduct')}</h3></Link>
      <Link to="/my-wishes" className=" text-info"><h3 className="text-center p-0">{t('MyWish')}</h3></Link> 
    </>
  );
}

import React, { useState, useEffect } from "react";
import "./personalPage.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import MainModal from "../editUser/mainModal";
import * as userService from "../../../services/users-service";
import UserDetailCard from "./userDetailCard";

export default function PersonalPage() {
  const [userMetadata, setUserMetadata] = useState(null);
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const something = async () => {
      const data = await userService.getUserMetadata(
        user,
        getAccessTokenSilently
      );
      return await setUserMetadata(data);
    };
    return something();
  }, [user, getAccessTokenSilently]);

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
      <Link to="/my-products" className=" text-info">
        <h3 className="text-center p-0">My Products </h3>
      </Link>
      <Link to="/my-wishes" className=" text-info">
        <h3 className="text-center p-0">My Wishes</h3>
      </Link>
    </>
  );
}

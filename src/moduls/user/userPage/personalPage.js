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

  const userId = user.sub;
  const something = async () => {
    const data = await userService.getUserMetadata(
      userId,
      getAccessTokenSilently
    );
    return await setUserMetadata(data);
  };

  useEffect(() => {
    something();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="out-container">
        <UserDetailCard element={userMetadata} />
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

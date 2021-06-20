import React, { useContext, useState, useEffect } from "react";
import "../userPage/personalPage.css";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Context from "../../../store/context";
import * as userService from "../../../services/users-service";
import MainForm from "./form/mainForm";
export default function EditUserDetail() {

  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
  const { user, getAccessTokenSilently } = useAuth0();
  const userId = user.sub;
  const history = useHistory();
  const context = useContext(Context);
  const photo = context.photo;
  const userMetaData = context.userMetaData;
  const [picture, setPicture] = useState(userMetaData?.picture);

  useEffect(() => {
    if (photo) {
      setPicture(photo);
    }
  }, [photo]);

  const accessToken = getAccessTokenSilently({
    audience: audience,
    scope: "read:current_user_metadata",
  });

  function onSubmit(event) {
    event.preventDefault();
    context.closedModalHandler(false);
    context.pageFormHandler(1);
    userService
      .updateUserMetaData(userId, accessToken, context, picture)
      .then(() => {
        history.replace("/personalPage");
      });
  }
  
  return (
    <>
      <div className="conteiner d-flex justify-content-center mt-5 pb-5">
        <form className="edit-user w-100" onSubmit={onSubmit}>
          <h3> My Detail </h3>
          <MainForm/>
        </form>
      </div>
    </>
  );
}

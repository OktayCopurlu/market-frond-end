import React, { useContext, useState, useEffect } from "react";
import "../userPage/personalPage.css";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Context from "../../../context/context";
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

  const [picture, setPicture] = useState(userMetaData.picture);
  const [name, setName] = useState(userMetaData.name);
  const [address, setAddress] = useState(userMetaData.address);
  const [canton, setCanton] = useState(userMetaData.canton);
  const [city, setCity] = useState(userMetaData.city);
  const [detail, setDetail] = useState(userMetaData.detail);
  const [contactNumber, setContactNumber] = useState(userMetaData.phone);
  const [birthDate, setBirthDate] = useState(userMetaData.birthDate);
  const [job, setJob] = useState(userMetaData.job);

  useEffect(() => {
    if (photo) {
      setPicture(photo);
    }
    if (context.name) {
      setName(context.name);
    }
    if (context.address) {
      setAddress(context.address);
    }
    if (context.canton) {
      setCanton(context.canton);
    }
    if (context.city) {
      setCity(context.city);
    }
    if (context.detail) {
      setDetail(context.detail);
    }
    if (context.phone) {
      setContactNumber(context.phone);
    }
    if (context.birthDate) {
      setBirthDate(context.birthDate);
    }
    if (context.job) {
      setJob(context.job);
    }
  }, [
    photo,
    context.address,
    context.birthDate,
    context.canton,
    context.city,
    context.detail,
    context.job,
    context.name,
    context.phone,
  ]);
  
  const body = {
    user_metadata: {
      canton,
      city,
      address,
      birthDate,
      contactNumber,
      detail,
      name,
      job,
      picture,
    },
  };
  const accessToken = getAccessTokenSilently({
    audience: audience,
    scope: "read:current_user_metadata",
  });

  function onSubmit(event) {
    event.preventDefault();
    context.closedModalHandler(false);
    context.pageFormHandler(1);
    userService.updateUserMetaData(userId, accessToken, body).then(() => {
      history.replace("/");
    });
  }

  return (
    <>
      <div className="conteiner d-flex justify-content-center mt-5 pb-5">
        <form className="edit-user w-100" onSubmit={onSubmit}>
          <h3> My Detail </h3>
          <MainForm />
        </form>
      </div>
    </>
  );
}

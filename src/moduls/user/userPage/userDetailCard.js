import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserPicture from "./userPicture";

export default function UserDetailCard(props) {
  const userMetadata = props.element;
  const { user } = useAuth0();

  const { name, picture, email } = user;
  return (
    <div className="mt-5">
      <div className="d-flex align-items-center justify-content-center">
        <UserPicture element={{ picture, userMetadata }} />
        <div className="text-center align-items-center text-md-left">
          <h2>{userMetadata ? userMetadata.name : name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div class="card">
      <img src={picture} alt="John"/>
        <h1>{name}</h1>
        <p class="title">CEO & Founder, Example</p>
        <p>Harvard University</p>
        <a href="https://www.instagram.com/swissoktay/"><i className="fab fa-instagram"></i></a>
        <a href="https://twitter.com/Oktay18521974"><i className="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com/oktay.copurlu"> <i className="fab fa-facebook-f"></i></a>
        <p><button>{email}</button></p>
    </div>
      {/* <div className="d-flex justify-content-center">
        {userMetadata ? (
          <div className="col-8 text-light bg-dark p-4">
            <p>Job : {userMetadata.job}</p>
            <p>Birth date : {userMetadata.birthDate}</p>
            <p>Detail : {userMetadata.detail}</p>
            <p>Address : {userMetadata.address}</p>
            <p>Canton : {userMetadata.canton}</p>
            <p>City : {userMetadata.city}</p>
            <p>Phone : {userMetadata.contactNumber}</p>
          </div>
        ) : null}
      </div> */}
    </div>
  );
}

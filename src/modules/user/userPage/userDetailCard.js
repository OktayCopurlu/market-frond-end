import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./personalPage.css";
import { useTranslation } from "react-i18next";
import UserMessages from "../../../components/messages/userMessages";
export default function UserDetailCard(props) {
  const userMetadata = props.element;
  const { user } = useAuth0();
  const { t } = useTranslation();
  const { name, picture, email } = user;
  return (
    <div className="mt-5 user-card-container">
      <div className="user-card">
        {!userMetadata?.picture ? (
          <img className="w-25 mt-4" src={picture} alt={name} />
        ) : (
          <img className="w-25 mt-4" src={userMetadata?.picture} alt={name} />
        )}
        <h3 className="p-0">{userMetadata?.name ? userMetadata.name : name}</h3>
        <h4 className="p-0">{userMetadata?.job}</h4>
        <p className="d-flex ml-5">
          <span className="h6 mr-3">{t("BirthDate")} :</span>
          <span>{userMetadata?.birthDate}</span>
        </p>
        <p className="d-flex ml-5">
          <span className="h6 mr-3">
            {t("Detail")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{" "}
          </span>
          <span>{userMetadata?.detail}</span>
        </p>
        <p className="d-flex ml-5">
          <span className="h6 mr-3">
            {t("Address")}&nbsp;&nbsp;&nbsp;&nbsp; :
          </span>
          <span>{userMetadata?.address}</span>
        </p>
        <p className="d-flex ml-5">
          <span className="h6 mr-3">
            {t("Canton")} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          </span>
          <span> {userMetadata?.canton}</span>
        </p>
        <p className="d-flex ml-5">
          <span className="h6 mr-3">
            {t("City")}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{" "}
          </span>
          <span>{userMetadata?.city}</span>
        </p>
        <p className="d-flex ml-5">
          <span className="h6 mr-3">
            {t("Phone")}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
          </span>
          <span>{userMetadata?.contactNumber}</span>
        </p>
        <UserMessages/>
        {userMetadata?.instagram ? (
          <a
            className="social-media"
            target="_blank"
            rel="noreferrer"
            href={userMetadata?.instagram}
          >
            <i className="fab fa-instagram"></i>
          </a>
        ) : (
          <a
            className="social-media"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/swissoktay/"
          >
            <i className="fab fa-instagram"></i>
          </a>
        )}
        {userMetadata?.twitter ? (
          <a
            className="social-media"
            target="_blank"
            rel="noreferrer"
            href={userMetadata?.twitter}
          >
            <i className="fab fa-twitter"></i>
          </a>
        ) : (
          <a
            className="social-media"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Oktay18521974"
          >
            <i className="fab fa-twitter"></i>
          </a>
        )}
        {userMetadata?.facebook ? (
          <a
            className="social-media"
            target="_blank"
            rel="noreferrer"
            href={userMetadata?.facebook}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        ) : (
          <a
            className="social-media"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/oktay.copurlu"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        )}
        <p>
          <button className="user-contact-button mt-3">{email}</button>
        </p>
      </div>
    </div>
  );
}

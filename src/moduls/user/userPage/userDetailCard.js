import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./personalPage.css"
import {useTranslation} from "react-i18next";
export default function UserDetailCard(props) {
  const userMetadata = props.element;
  const { user } = useAuth0();
  const {t}= useTranslation()
  const { name, picture, email } = user;
  return (
    <div className="mt-5 user-card-container">
      <div className="user-card">
        <img className="w-25 mt-4" src={picture} alt={name} />
        <h3 className="p-0">{name}</h3>
        <h4 className="p-0">
         {userMetadata?.job}
        </h4>
        <p>
         <span className="h6 mr-3">{t('BirthDate')} :</span> <span>{userMetadata?.birthDate}</span>
        </p>
        <p>
         <span className="h6 mr-3">{t('Detail')} : </span>
          <span>{userMetadata?.detail}</span>
        </p>
        <p>
         <span className="h6 mr-3">{t('Address')} :</span> <span>{userMetadata?.address}</span>
        </p>
        <p>
        <span className="h6 mr-3">{t('Canton')} :</span>
          <span> {userMetadata?.canton}</span>
        </p>
        <p>
         <span className="h6 mr-3">{t('City')} : </span>
          <span>{userMetadata?.city}</span>
        </p>
        <p>
        <span className="h6 mr-3">{t('Phone')} :</span> <span>{userMetadata?.contactNumber}</span>
        </p>
        <a
          className="social-media"
          href="https://www.instagram.com/swissoktay/"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a className="social-media" href="https://twitter.com/Oktay18521974">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="social-media"
          href="https://www.facebook.com/oktay.copurlu"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <p>
          <button className="user-contact-button mt-3">{email}</button>
        </p>
      </div>
    </div>
  );
}

import React,{useContext} from "react";
import UpdateUserPicture from "./updateUserPicture";
import Phone from "../../../../components/forms/userForms/userPhone/phone";
import Context from "../../../../context/context";
import {useTranslation} from "react-i18next";
export default function FourPageForm() {
  const context = useContext(Context)
  const {t}= useTranslation()
  return (
    <>
    <Phone />
    <div className="input-field">
        <label htmlFor="contact">{t('Facebook')}</label>
        <input
        placeholder="example : https://www.facebook.com/oktay.copurlu"
          className="form-control"
          name="facebook"
          onChange={(event) => context.facebookHandler(event.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="contact">{t('Twitter')}</label>
        <input
          className="form-control"
          placeholder="example : https://twitter.com/Oktay18521974"
          name="twitter"
          onChange={(event) => context.twitterHandler(event.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="contact">{t('Instagram')}</label>
        <input
          className="form-control"
          placeholder="example : https://www.instagram.com/swissoktay/"
          name="instagram"
          onChange={(event) => context.instagramHandler(event.target.value)}
        />
      </div>
    <UpdateUserPicture />
    <div className="form-group d-flex justify-content-end">
        <input 
          type="submit"
          value="Save"
          className="btn btn-primary"
        />
      </div>
  </>
  );
}

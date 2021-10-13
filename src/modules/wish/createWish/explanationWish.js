import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../../product/createProduct/create.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ExplanationWish() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { t } = useTranslation();

  return (
    <section className="explanation-container wish-explanation-style">
      <h1>freeMarket</h1>
      <p className="mt-2 information-text">{t("FreeMarket")}</p>
      <p className="mt-2 information-text">{t("WhatIsFreeMarketText")}</p>

      <h3>{t("Recipients")}</h3>
      <p className="mt-2 information-text">{t("RecipientsText")}</p>
      <h3>{t("WishItems")}</h3>
      <p className="mt-2 information-text">{t("WishListText")}</p>
      {!isAuthenticated ? (
        <button
          className="btn btn-primary mt-5 px-5 py-2"
          onClick={loginWithRedirect}
        >
          Sign Up
        </button>
      ) : (
        <Link to="/create" className="btn btn-primary mt-5 px-5 py-2">
          {t("CreateYourWish")}
        </Link>
      )}
    </section>
  );
}

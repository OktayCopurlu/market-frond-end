import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

export default function BoxesNoAuth() {
  const { t } = useTranslation();
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md text-center mb-2 boxes-container ">
          <button className="boxes donate-box" onClick={loginWithRedirect}>
            <img
              className="box-images"
              src="https://as2.ftcdn.net/v2/jpg/01/92/87/05/1000_F_192870527_rhRBKQwHF993xWb6le87DUXwTwAnK5X1.jpg"
              alt="donate photos"
            />
            <div className="overlay">
              <strong className="text-in-boxes">
                lorem ipsum dolor sit amet, consectetur adip occ lorem
              </strong>
            </div>
          </button>
          <h5 className="d-flex justify-content-center">{t("DonateItems")}</h5>
        </div>
        <div className="col-md mb-2 boxes-container ">
          <a href="/productList" className="boxes find-box">
            <img
              className="box-images"
              src="https://t4.ftcdn.net/jpg/03/18/82/17/240_F_318821714_8vn2k5rCYwRCdEoW7mrKiy0oIqGcoz3n.jpg"
              alt="find photos"
            />
            <div className="overlay">
              <strong className="text-in-boxes">
                lorem ipsum dolor sit amet, consectetur adip occ lorem
              </strong>
            </div>
          </a>
          <h5 className="d-flex justify-content-center">{t("FindItems")}</h5>
        </div>
        <div className="col-md mb-2 boxes-container ">
          <button className="boxes wish-box" onClick={loginWithRedirect}>
            <img
              className="box-images"
              src="https://t4.ftcdn.net/jpg/01/68/91/73/240_F_168917354_V38JnhtGRlN5SE7vRVkp7Dl8jQTFM42i.jpg"
              alt="wish photos"
            />
            <div className="overlay">
              <strong className="text-in-boxes">
                lorem ipsum dolor sit amet, consectetur adip occ lorem
              </strong>
            </div>
          </button>
          <h5 className="d-flex justify-content-center">{t("WishItems")}</h5>
        </div>
      </div>
    </div>
  );
}

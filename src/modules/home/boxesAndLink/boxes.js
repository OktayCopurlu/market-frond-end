import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Boxes() {
  const { t } = useTranslation();

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md mb-2 boxes-container">
          <Link to="/explanation" className="boxes donate-box">
            <img
              className="box-images"
              src="https://as2.ftcdn.net/v2/jpg/01/92/87/05/1000_F_192870527_rhRBKQwHF993xWb6le87DUXwTwAnK5X1.jpg"
              alt="donate photos"
            />
            <div className="overlay">
              <strong className="text-in-boxes">lorem ipsum dolor sit amet, consectetur adip occ lorem</strong>
            </div>
          </Link>
          <h5 className="d-flex justify-content-center">{t("DonateItems")}</h5>
        </div>
        <div className="col-md mb-2 boxes-container">
          <Link to="/productList" className="boxes find-box">
            <img
              className="box-images"
              src="https://t4.ftcdn.net/jpg/03/18/82/17/240_F_318821714_8vn2k5rCYwRCdEoW7mrKiy0oIqGcoz3n.jpg"
              alt="find photos"
            />
            <div className="overlay">
              <strong className="text-in-boxes" >lorem ipsum dolor sit amet, consectetur adip occ lorem</strong>
            </div>
          </Link>
          <h5 className="d-flex justify-content-center">{t("FindItems")}</h5>
        </div>

        <div className="col-md mb-2 boxes-container ">
          <Link to="/explanation-wish" className="boxes wish-box">
            <img
              className="box-images"
              src="https://t4.ftcdn.net/jpg/01/68/91/73/240_F_168917354_V38JnhtGRlN5SE7vRVkp7Dl8jQTFM42i.jpg"
              alt="wish photos"
            />
            <div className="overlay">
              <strong className="text-in-boxes">lorem ipsum dolor sit amet, consectetur adip occ lorem</strong>
            </div>
          </Link>
          <h5 className="d-flex justify-content-center">{t("WishItems")}</h5>
        </div>
      </div>
    </div>
  );
}

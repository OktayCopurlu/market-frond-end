import React from "react";
import Slider from "../slider";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

import "./productCard.css";
export default function ProductCard(props) {
  const element = props.element;
  const { t } = useTranslation();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="card product-card mt-0 card-container">
      <div className="card-photo">
        {element.photos.length > 0 ? (
          <Slider photos={element.photos} />
        ) : (
          <img
            className="images mb-2"
            alt="no photos"
            src="https://orbis-alliance.com/wp-content/themes/consultix/images/no-image-found-360x260.png"
          />
        )}
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5>{element.title}</h5>
          <p>{element.canton}</p>
        </div>
        <div className="d-flex justify-content-between mb-0">
          <p className="mb-0">{element.condition}</p>
          <p className="mb-0">{element.city}</p>
        </div>

        <p className="mt-0">
          {element.size ? `${t("Size")} :` : null} {element.size}
        </p>
        <p className="mt-0">
          {element.dimensions ? `${t("Dimensions")} :` : null}
          {element.dimensions}
        </p>
        <p className="mt-0">{element.detail}</p>
        {isAuthenticated ? (
          <Link to="#" className="text-info d-block">
            <i className="fas fa-envelope"></i> {element.contactEmail}
          </Link>
        ) : null}
      </div>
      <div className="card-footer">
        {isAuthenticated ? (
          <Link to="#" className="text-dark d-block">
            <i className="fas fa-phone"></i> {element.contactTel}
          </Link>
        ) : (
          <Link
            to="/SignUp"
            onClick={() =>
              loginWithRedirect({
                screen_hint: "signup",
              })
            }
            className="text-danger"
          >
            {t("PleaseSignUp")}
          </Link>
        )}
      </div>
    </div>
  );
}

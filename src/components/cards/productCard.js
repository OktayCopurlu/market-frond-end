import React from "react";
import Slider from "../slider";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import DeleteProduct from "../../modules/product/deleteProduct/deleteProduct";
import "./productCard.css";
import MapGoogle from "../../modules/product/listProduct/google-map/mapGoogle";
import ProductEditModal from "../../modules/user/userProduct/productEditModal";
export default function ProductCard(props) {
  const element = props.element;
  const productUserId = element.userId;
  const canton = props.element.canton;
  const city = props.element.city;
  const { t } = useTranslation();
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
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
          <p>{canton}</p>
        </div>
        <div className="d-flex justify-content-between mb-0">
          <p className="mb-0">{element.condition}</p>
          <div className="mb-0">
            <MapGoogle address={{ canton, city }} />
          </div>
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
          <a
            href={`mailto:${element.contactEmail}`}
            className="text-info d-block"
          >
            <i className="fas fa-envelope"></i> {element.contactEmail}
          </a>
        ) : null}
      </div>
      <div className="card-footer">
        {isAuthenticated ? (
          <div className="d-flex justify-content-between" >
            <a href={`tel:${element.contactTel}`} className="text-dark d-block">
              <i className="fas fa-phone"></i> {element.contactTel}
            </a>
            {productUserId === user.sub ? <div><ProductEditModal element={element._id}/> <DeleteProduct value={element._id}/></div>: ""}

          </div>
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

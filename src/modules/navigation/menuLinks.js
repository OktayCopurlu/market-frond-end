import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import LoginAndUserPhoto from "./loginAndUserPhoto";
import Context from "../../context/context";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "./changeLanguage";
import ProductContext from "../../context/productContext";
export default function MenuLinks() {
  const { isAuthenticated } = useAuth0();
  const context = useContext(Context);
  const productContext = useContext(ProductContext);

  const { t } = useTranslation();
  //this is for @media navbar
  const click = context.navbarOpen;
  const handleClick = () => {
    context.navbarOpenHandler(!click);
    context.pageFormHandler(1);
    productContext.productHandler("");
    productContext.pictureUploadedHandler(false);
  };

  return (
    <>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            exact
            to="/productList"
            activeclassname="active"
            className="nav-links"
            onClick={handleClick}
          >
            {t("ProductList")}
          </NavLink>
        </li>
        {isAuthenticated ? (
          <li className="nav-item">
            <NavLink
              exact
              to="/create"
              activeclassname="active"
              className="nav-links"
              onClick={handleClick}
            >
              {t("CreateProducts")}
            </NavLink>
          </li>
        ) : null}
        <li className="nav-item">
          <NavLink
            exact
            to="/wishList"
            activeclassname="active"
            className="nav-links"
            onClick={handleClick}
          >
            {t("WishList")}
          </NavLink>
        </li>
        {isAuthenticated ? (
          <li className="nav-item">
            <NavLink
              exact
              to="/wishForm"
              activeclassname="active"
              className="nav-links"
              onClick={handleClick}
            >
              {t("CreateWish")}
            </NavLink>
          </li>
        ) : null}
        {/* show login / logout bottun and user photo */}
        <LoginAndUserPhoto />
        <ChangeLanguage />
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
      </div>
    </>
  );
}

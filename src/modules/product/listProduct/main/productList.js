import React, { useContext } from "react";
import "./productList.css";
import ProductContext from "../../../../context/productContext";
import Card from "../card/card";
import FilterProduct from "../filter/filterProduct";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import loading from "../../../../store/Loading.svg"
export default function ProductList() {
  const productContext = useContext(ProductContext);
  const location = useLocation();
  localStorage.setItem("path", location.pathname);

  const searchItem = productContext.search;
  const productList = productContext.state;
  const canton = productContext.canton;
  const category = productContext.mainCategory;
  const { t } = useTranslation();
  return (
    <div className="productList-container">
      <FilterProduct />
      {productList.length === 0 && (!canton && !category) ?  <h3 className="m-auto"><img className="m-auto" src={loading} alt="Loading..."/></h3>:
      productList.length === 0 ? (  
        <div className="m-auto d-flex justify-content-center">
          <h3 key="header">
            {t("ThereIsNoProduct")} in {""}
            <strong className="text-danger">
              {category && canton
                ? canton + " / " + category
                : category
                ? category
                : canton}
            </strong>
          </h3>
        </div>
      ) : (
        <Card elements={{ productList, searchItem }} />
      )}
    </div>
  );
}

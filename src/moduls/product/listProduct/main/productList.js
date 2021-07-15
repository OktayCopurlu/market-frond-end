import React, { useContext } from "react";
import "./productList.css";
import ProductContext from "../../../../context/productContext";
import Card from "../card/card";
import FilterProduct from "../filter/filterProduct";
import { useTranslation } from "react-i18next";

export default function ProductList() {
  const productContext = useContext(ProductContext);
  const searchItem = productContext.search;
  const state = productContext.state;
const {t}= useTranslation()
  return (
    <div className="row productList-container">
      <FilterProduct />
      {state.length === 0 ? (<div className="m-auto d-flex justify-content-center"> 
          <h3 key="header">{t('ThereIsNoProduct')}</h3></div>
        ) : (
          
      <Card elements={{ state, searchItem }} />)}
    </div>
  );
}

import React from "react";
import ProductCard from "../../../../components/cards/productCards";
import { useTranslation } from "react-i18next";

export default function Card(filterAndSearch) {
  const searched = filterAndSearch.elements;
<<<<<<< HEAD
  const { state, searchItem } = searched;
const {t}=useTranslation()
  return (
    <div className="col-9 productList-main">
      <div className="row">
        {state === 0 ? (
          <h3>{t('CategoryIsEmpty')}</h3>
=======
  const { productList, searchItem } = searched;

  return (
    <div className="col-9 productList-main">
      <div className="row">
        {productList === 0 ? (
          <h3>Category is empty</h3>
>>>>>>> main
        ) : (
          productList
            .filter((element) => {
              if (
                element.title.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return element;
              } else if (
                element.canton.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return element;
              } else if (
                element.detail.toLowerCase().includes(searchItem.toLowerCase())
              ) {
                return element;
              }
              return null;
            })
            .map((element,index) => {
              return <ProductCard element={element} key={index} />;
            })
        )}
      </div>
    </div>
  );
}

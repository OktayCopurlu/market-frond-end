import React from "react";
import ProductCard from "../../../../components/cards/productCard";
import { useTranslation } from "react-i18next";

export default function Card(filterAndSearch) {
  const searched = filterAndSearch.elements;
  const { t } = useTranslation();
  const { productList, searchItem } = searched;

  return (
    <div className="col-9 productList-main">
      <div className="row">
        {productList === 0 ? (
          <h3>{t("CategoryIsEmpty")}</h3>
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
            .map((element, index) => {
              return <ProductCard element={element} key={index} />;
            })
        )}
      </div>
    </div>
  );
}

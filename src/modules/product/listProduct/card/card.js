import React, { useEffect, useState } from "react";
import ProductCard from "../../../../components/cards/productCard";
import { useTranslation } from "react-i18next";
import loading from "../../../../store/Loading.svg"
export default function Card(filterAndSearch) {
  const searched = filterAndSearch.elements;
  const { t } = useTranslation();
  const { productList, searchItem } = searched;
  const [productListFiltered, setProductListFiltered] = useState([]);

  useEffect(() => {
    if (productList === 0) {
      <h3>{t("CategoryIsEmpty")}</h3>;
    } else {
      var productsListSs = productList.filter((element) => {
        if (element.title.toLowerCase().includes(searchItem.toLowerCase())) {
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
      });
    }
    setProductListFiltered(productsListSs);
  }, [productList, searchItem, t]);

  return (
    <div className="productList-main">
      {productListFiltered.length > 0 ? (
        productListFiltered.map((element, index) => {
          return <ProductCard element={element} key={index} />;
        })
      ) : searchItem ? (
        <h3 className="empty-filter">
          <strong className="text-danger">{searchItem}</strong> Couldn't be found
        </h3>
      ) : (
        <div className="m-auto">
          <img className="m-auto" src={loading} alt="Loading..."/>
        </div>
      )}
    </div>
  );
}

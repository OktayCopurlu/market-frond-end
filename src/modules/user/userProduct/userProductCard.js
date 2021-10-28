import React from "react";
import "../userPage/personalPage.css";
import ProductCard from "../../../components/cards/productCard";

export default function UserProductCard(props) {
  const products = props.products;

  return (
    <>
      {products.map((element, index) => {
        return (
          <div key={index} className="user-product-card mb-5">
            <ProductCard element={element} />
          </div>
        );
      })}
    </>
  );
}

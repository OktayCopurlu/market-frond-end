import React from "react";
import DeleteProduct from "../../product/deleteProduct/deleteProduct";
import "../userPage/personalPage.css";
import ProductCard from "../../../components/cards/productCard";
import ProductEditModal from "./productEditModal";

export default function UserProductCard(props) {
  const products = props.products;

  
  return (
    <>
      {products.map((element, index) => {
        return (
          <div  key={index} className="user-product-card mb-5">
            <ProductCard element={element} />
            <p>
              <ProductEditModal element={element}/>
              <DeleteProduct value={element._id}/>
            </p>
          </div>
        );
      })}
    </>
  );
}

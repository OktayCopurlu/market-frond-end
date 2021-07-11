import React, { useContext } from "react";
import "./productList.css";
import ProductContext from "../../../../context/productContext";
import Card from "../card/card";
import FilterProduct from "../filter/filterProduct";

export default function ProductList() {
  const productContext = useContext(ProductContext);
  const searchItem = productContext.search;
  const state = productContext.state;

  return (
    <div className="row productList-container">
      <FilterProduct />
      {state ? state.length === 0 ? (<div className="m-auto d-flex justify-content-center"> 
          <h3 key="header">There is no Product</h3></div>
        ) : (
      <Card elements={{ state, searchItem }} />): <h3 className="m-5">Loading...</h3>}
    </div>
  );
}

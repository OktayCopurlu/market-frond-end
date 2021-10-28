import React, { useContext,useEffect }from "react";
import ProductContext from "../../../../context/productContext";
import * as productService from "../../../../services/products-service";
import SearchButton from "../../../../components/search/searchButton";
import CantonLinks from "../../../../components/filter/cantonLinks";
import CategoryLinks from "../../../../components/filter/categoryLinks";
import "../main/productList.css"

export default function FilterProduct() {
  const productContext = useContext(ProductContext);
  const mainCategory = productContext.filterCategory;
  const canton = productContext.filterCanton;
  
  useEffect(() => {
  productService.listAction (canton,mainCategory,productContext)
  // eslint-disable-next-line
},[canton,mainCategory])

  return (
    <div className="productList-menu">
      <SearchButton />
      <CategoryLinks/>
      <CantonLinks/>
    </div>
  );
}

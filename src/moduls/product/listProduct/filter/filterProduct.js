import React, { useContext,useEffect }from "react";
import ProductContext from "../../../../context/productContext";
import * as productService from "../../../../services/products-service";
import SearchButton from "../../../../components/search/searchButton";
import CantonLinks from "../../../../components/forms/productForms/cantonLinkList/cantonLinks";
import CategoryLinks from "../../../../components/forms/productForms/categoryLinkList/categoryLinks";
import "../main/productList.css"
export default function FilterProduct() {
  const productContext = useContext(ProductContext);
  const mainCategory = productContext.mainCategory;
  const canton = productContext.canton;

  useEffect(() => {
  productService.listAction (canton,mainCategory,productContext)
  // eslint-disable-next-line
},[canton,mainCategory])

  return (
    <div className="col-3 productList-menu">
      <SearchButton />
      <CategoryLinks/>
      <CantonLinks/>
    </div>
  );
}

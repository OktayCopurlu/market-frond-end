import React from "react";
import City from "../../../components/forms/productForms/cantonAndCity/city";
import ClothesCategory from "../../../components/forms/productForms/categoryAndPhotos/clothesCategory";
import Canton from "../../../components/forms/productForms/cantonAndCity/canton";
import Category from "../../../components/forms/productForms/categoryAndPhotos/category";
import Condition from "../../../components/forms/productForms/condition/condition";

export default function FirstPageForm(props) {
  const mainCategory = props.mainCategory;
  return (
    <>
      <Canton />
      <City />
      <Category />
      {mainCategory === "Clothes" ? <ClothesCategory /> : null}
      <Condition />
    </>
  );
}

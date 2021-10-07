import React from "react";
import Canton from "../../../components/forms/productForms/cantonAndCity/canton";
import City from "../../../components/forms/productForms/cantonAndCity/city";
import Category from "../../../components/forms/productForms/categoryAndPhotos/category";

export default function FirstPageForm() {
  return (
    <>
      <Canton />
      <City />
      <Category />
    </>
  );
}

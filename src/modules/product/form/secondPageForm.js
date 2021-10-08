import React from "react";
import Title from "../../../components/forms/productForms/title/title";
import Dimensions from "../../../components/forms/productForms/sizeAndDimensions/dimensions";
import Size from "../../../components/forms/productForms/sizeAndDimensions/size";
import Information from "../../../components/forms/productForms/information/information";

export default function SecondPageForm(props) {
  const mainCategory = props.mainCategory;

  return (
    <>
      <Title />
      {mainCategory === "Hausehold" ? <Dimensions /> : null}
      {mainCategory === "Clothes" ? <Size /> : null}
      <Information />
    </>
  );
}

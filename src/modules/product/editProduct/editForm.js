import React, { useContext } from "react";
import ProductContext from "../../../context/productContext";
import * as productActions from "../../../services/products-service";
import MainForm from "../form/mainForm";

export default function EditForm(props) {

  const { productId, body, handlerSuccess, token } = props.elements;
  const productContext = useContext(ProductContext);
  const mainCategory = productContext.mainCategory;


  function onSubmit(event) {
    event.preventDefault();
    productActions.updateProduct(productId, body, handlerSuccess, token);
  }


  return (
    <div className="w-100">
      <form className="form-create w-100" onSubmit={onSubmit}>
      <MainForm mainCategory={mainCategory} />
      </form>
    </div>
  );
}

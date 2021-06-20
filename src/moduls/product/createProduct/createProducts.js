import React, { useState, useContext } from "react";
import "./create.css";
import Context from "../../../store/context";
import ProductContext from "../../../store/productContext";
import * as productActions from "../../../services/products-service";
import { useAuth0 } from "@auth0/auth0-react";
import SuccessText from "../../../components/forms/productForms/messages/successText";
import NotSuccessText from "../../../components/forms/productForms/messages/notSuccessText";
import MainForm from "../form/mainForm";

export default function CreateProducts() {
  const { getAccessTokenSilently, user } = useAuth0();
  const [token, setToken] = useState();
  getAccessTokenSilently().then((token) => setToken(token));

  const userId = user.sub;
  const context = useContext(Context);
  const productContext = useContext(ProductContext);
  const canton = productContext.canton;
  const city = productContext.city;
  const categoryClothes = productContext.categoryClothes;
  const mainCategory = productContext.mainCategory;
  const photos = productContext.photos;
  const condition = productContext.condition;
  const title = productContext.title;
  const size = productContext.size;
  const detail = productContext.information;
  const contactTel = productContext.contactTel;
  const dimensions = productContext.dimensions;
  const contactEmail = productContext.contactEmail;
  //----------------------------------------------------------------

  const body = {
    mainCategory,
    userId,
    canton,
    city,
    categoryClothes,
    condition,
    title,
    size,
    dimensions,
    detail,
    contactTel,
    photos,
    contactEmail,
  };

  //post request function
  function onSubmit(event) {
    event.preventDefault();
    productActions.createProduct(body, context.handlerSuccess, token);
  }
  //----------------------------------------------------------------

  return (
    <div className="container">
      <h3 className="d-flex justify-content-center"> Create New Product </h3>
      {context.isSuccess === null ? (
        <div className="row">
          <div className="col d-flex justify-content-center">
            <form className="form-create" onSubmit={onSubmit}>
              <MainForm mainCategory={mainCategory} />
            </form>
          </div>
        </div>
      ) : context.isSuccess ? (
        <SuccessText /> //success message
      ) : (
        <NotSuccessText /> //not success message
      )}
    </div>
  );
}

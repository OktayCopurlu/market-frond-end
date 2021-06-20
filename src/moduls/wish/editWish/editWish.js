import React, { useState, useContext } from "react";
import * as wishActions from "../../../services/wishes-service";
import AuthContext from "../../../store/context";
import { useAuth0 } from "@auth0/auth0-react";
import SuccessText from "./messages/successText";
import NotSuccessText from "./messages/notSuccessText";
import ProductContext from "../../../store/productContext";
import MainForm from "../form/mainForm";

export default function EditWish(props) {
  const productContext = useContext(ProductContext);

  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState();
  getAccessTokenSilently().then((token) => setToken(token));
  const productId = props.element;
  const context = useContext(AuthContext);
  const page = context.pageFormHandler;

  const name = productContext.name;
  const canton = productContext.canton;
  const title = productContext.title;
  const detail = productContext.information;
  const contactTel = productContext.contactTel;
  const city = productContext.city;
  const mainCategory = productContext.mainCategory;
  const contactEmail = productContext.contactEmail;

  const body = {
    canton,
    mainCategory,
    city,
    title,
    detail,
    contactTel,
    name,
    contactEmail,
  };

  //post request function
  function onSubmit(event) {
    event.preventDefault();
    page(1)
    wishActions.updateWish(productId, body, context.handlerSuccess, token);
  }
  //----------------------------------------------------------------

  return (
    <>
      <h3> Edit Wish </h3>
      <div className="row">
        <div className="col">
          {context.isSuccess === null ? (
            <form className="form-create w-100" onSubmit={onSubmit}>
               <MainForm/>
            </form>
          ) : context.isSuccess ? (
            <SuccessText />
          ) : (
            <NotSuccessText />
          )}
        </div>
      </div>
    </>
  );
}

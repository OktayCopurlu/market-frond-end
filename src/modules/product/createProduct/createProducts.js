import React, { useState, useContext } from "react";
import "./create.css";
import Context from "../../../context/context";
import ProductContext from "../../../context/productContext";
import * as productActions from "../../../services/products-service";
import { useAuth0 } from "@auth0/auth0-react";
import SuccessText from "../../../components/forms/productForms/messages/successText";
import NotSuccessText from "../../../components/forms/productForms/messages/notSuccessText";
import MainForm from "../form/mainForm";
import { useTranslation } from "react-i18next";
import StepBar from "./stepBar";
import { getUserInformationFromMangoDB } from "../../../services/users-service";
// import ReactStepBar from "./reactStepBar";
export default function CreateProducts() {
  const { t } = useTranslation();
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
  const [mongoUserID, setMongoUserID] = useState();
  getUserInformationFromMangoDB(user).then((user) =>
    setMongoUserID(user[0]._id)
  );
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
    mongoUserID,
  };

  //post request function
  const onSubmit = async (event) => {
    try {
      await event.preventDefault();
      productActions.createProduct(body, context.handlerSuccess, token);
      context.pageFormHandler(1);
      productContext.cantonHandler(null);
      productContext.mainCategoryHandler(null);
    } catch (error) {
      console.log(error);
    }
  };
  //----------------------------------------------------------------

  return (
    <div className="container">
      <h3 className="d-flex justify-content-center">{t("CreateNewProduct")}</h3>
      {context.isSuccess === null ? (
        <>
          {/* <ReactStepBar/> */}
          <StepBar />
          <div>
            <div className="col d-flex justify-content-center">
              <form className="form-create" onSubmit={onSubmit}>
                <MainForm mainCategory={mainCategory} />
              </form>
            </div>
          </div>
        </>
      ) : context.isSuccess ? (
        <SuccessText /> //success message
      ) : (
        <NotSuccessText /> //not success message
      )}
    </div>
  );
}

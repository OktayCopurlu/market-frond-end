import React, {  useContext } from "react";
import Context from "../../../../context/context";
import ProductContext from "../../../../context/productContext";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
export default function NotSuccessText() {
    const context = useContext(Context);
    const productContext = useContext(ProductContext);
    const {t}= useTranslation()
    function onClick() {
        context.pageFormHandler(1)
        context.handlerSuccess(null);
        productContext.cantonHandler(null);
      }
    return (
        <div className="alert alert-danger text-center" role="alert">
        <p>{t('CreateWishMessage.notSuccess')}</p>
        <p>
          <Link onClick={onClick} to="/wishForm" className="btn btn-primary mt-5">
          {t('CreateWishMessage.tryAgain')}
          </Link>
        </p>
      </div>
    )
}

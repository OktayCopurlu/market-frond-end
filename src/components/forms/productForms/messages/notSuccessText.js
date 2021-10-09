import React, {useContext } from "react";
import Context from "../../../../context/context";
import { Link } from "react-router-dom";
import ProductContext from "../../../../context/productContext";
import { useTranslation } from "react-i18next";
export default function NotSuccessText() {
  const context = useContext(Context);
  const productContext = useContext(ProductContext);
  const {t}= useTranslation()
  function onClick() {
    context.handlerSuccess(null);
    productContext.photosHandler([]);
    productContext.cantonHandler(null);
    productContext.dimensionsHandler(null);
    productContext.contactEmailHandler(null)
    productContext.informationHandler(null)
    productContext.contactTelHandler(null)
    productContext.titleHandler(null)
    productContext.sizeHandler(null)
    productContext.conditionHandler(null)
    productContext.categoryClothesHandler(null)
    productContext.mainCategoryHandler(null)
    productContext.cityHandler(null)
  }
  return (
    <div className="alert alert-danger text-center" role="alert">
    <p>{t('ProductCreateMessage.notSuccess')}</p>
    <p>
      <Link onClick={onClick} to="/create" className="btn btn-warning mt-5">
      {t('ProductCreateMessage.tryAgain')}
      </Link>
    </p>
  </div>
  );
}

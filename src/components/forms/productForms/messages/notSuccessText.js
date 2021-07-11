import React, {useContext } from "react";
import Context from "../../../../context/context";
import { Link } from "react-router-dom";
import ProductContext from "../../../../context/productContext";

export default function NotSuccessText() {
  const context = useContext(Context);
  const productContext = useContext(ProductContext);

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
    <p> Product couldn't upload, something went wrong!!!</p>
    <p>
      <Link onClick={onClick} to="/create">
        Please try again!!!
      </Link>
    </p>
  </div>
  );
}

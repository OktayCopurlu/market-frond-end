import React, { useContext } from "react";
import Context from "../../../../store/context";
import { Link } from "react-router-dom";
import ProductContext from "../../../../store/productContext";

export default function SuccessText() {
  const context = useContext(Context);
  const productContext = useContext(ProductContext);

  function onClick() {
    context.handlerSuccess(null);
    productContext.photosHandler([]);
    productContext.cantonHandler(null);
  }
  return (
    <div className="alert alert-success text-center" role="alert">
      <p> Product is upload successfully... </p>
      <p>
        <Link onClick={onClick} to="#">
          Edit again
        </Link>
      </p>
    </div>
  );
}

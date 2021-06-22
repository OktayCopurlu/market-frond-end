import React, { useContext } from "react";
import Context from "../../../../context/context";
import { Link } from "react-router-dom";
import ProductContext from "../../../../context/productContext";

export default function SuccessText() {
  const context = useContext(Context);
  const productContext = useContext(ProductContext);

  function onClick() {
    context.pageFormHandler(1)
    context.handlerSuccess(null);
    productContext.cantonHandler(null);
  }
  return (
    <div className="alert alert-success text-center" role="alert">
      <p> Wish created successfully... </p>
      <p>
        <Link onClick={onClick} to="/wishForm">
          Create new Wish
        </Link>
      </p>
    </div>
  );
}

import React, {  useContext } from "react";
import Context from "../../../../context/context";
import ProductContext from "../../../../context/productContext";
import { Link } from "react-router-dom";

export default function NotSuccessText() {
    const context = useContext(Context);
const productContext = useContext(ProductContext);

    function onClick() {
        context.pageFormHandler(1)
        context.handlerSuccess(null);
        productContext.cantonHandler(null);
      }
    return (
        <div className="alert alert-danger text-center" role="alert">
        <p> Wish couldn 't created, something went wrong!!!</p>
        <p>
          <Link onClick={onClick} to="/wishForm">
            Please try again!!!
          </Link>
        </p>
      </div>
    )
}

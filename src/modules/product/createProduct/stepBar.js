import React, { useContext, useState } from "react";
import "./stepBar.css";
import Context from "../../../context/context";
import ProductContext from "../../../context/productContext";
export default function StepBar() {
  const context = useContext(Context);
  const productContext = useContext(ProductContext);

  const page = context.pageForm;
  const [active] = useState("active");

  return (
    <div className="d-flex justify-content-center">
      <ul className="progressbar">
        <li className={page >= 2 ? active : null}>
          {page >= 2 ? <i className="fas fa-check"></i> : null}
        </li>
        <li className={page >= 3 ? active : null}>
          {page >= 3 ? <i className="fas fa-check"></i> : null}
        </li>
        <li className={page >= 4 ? active : null}>
          {page >= 4 ? <i className="fas fa-check"></i> : null}
        </li>
        <li className={productContext.pictureUploaded ? active : null}>
          {productContext.pictureUploaded ? <i className="fas fa-check"></i> : null}
        </li>
      </ul>
    </div>
  );
}

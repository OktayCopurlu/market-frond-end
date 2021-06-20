import React, {useContext } from "react";
import ProductContext from "../../../../store/productContext";

function Information() {
    const productContext = useContext(ProductContext);
    return (
        <div className="input-field">
        <label htmlFor="detail"> More information </label>
        <textarea
          className="form-control"
          name="detail"
          onChange={(event) => productContext.informationHandler(event.target.value)}
        ></textarea>
      </div>
    )
}

export default Information

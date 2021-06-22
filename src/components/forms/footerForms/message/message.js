import React, {useContext } from "react";
import ProductContext from "../../../../context/productContext";

export default function Message() {
    const productContext = useContext(ProductContext);
    return (
        <div className="input-field">
        <label htmlFor="detail"> Message </label>
        <textarea
        required
        rows="5"
          className="form-control"
          name="detail"
          placeholder="Enter Your Message"
          onChange={(event) => productContext.informationHandler(event.target.value)}
        ></textarea>
      </div>
    )

}

import React, { useContext } from "react";
import ProductContext from "../../../../context/productContext";
export default function Title() {
  const productContext = useContext(ProductContext);

  return (
    <div className="input-field">
      <label htmlFor="title"> Title </label>
      <input
      required
        className="form-control  "
        type="text"
        name="name"
        onChange={(event) => productContext.titleHandler(event.target.value)}
      />
    </div>
  );
}

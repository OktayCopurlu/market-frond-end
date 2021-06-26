import React, { useContext } from "react";
import ProductContext from "../../../../context/productContext";
export default function Size() {
  const productContext = useContext(ProductContext);

  return (
    <div className="input-field mt-4 mb-4">
      <label htmlFor="title"> Size </label>
      <input
        className="form-control"
        name="size"
        onChange={(event) => productContext.sizeHandler(event.target.value)}
      />
    </div>
  );
}

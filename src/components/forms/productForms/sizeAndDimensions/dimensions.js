import React, {useContext } from "react";
import ProductContext from "../../../../context/productContext";
export default function Dimensions() {
  const productContext = useContext(ProductContext);

  return (
    <div className="input-field mt-4 mb-4">
      <label htmlFor="title"> Dimensions </label>
      <input
        className="form-control"
        name="dimensions"
        onChange={(event) =>
          productContext.dimensionsHandler(event.target.value)
        }
      />
    </div>
  );
}

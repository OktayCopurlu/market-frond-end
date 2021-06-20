import React, { useContext } from "react";
import ProductContext from "../../../../store/productContext";

export default function Category() {
  const productContext = useContext(ProductContext);
  return (
    <>
      {/* choosing main Category */}
      <div className="select-group">
        <select
          defaultValue="Choose canton"
          name="choosecanton"
          onChange={(event) =>
            productContext.mainCategoryHandler(event.target.value)
          }
          className="dropdown browser-default p-1  rounded"
        >
          <option value=""> Choose Category </option>
          <option value="Clothes"> Clothes </option>
          <option value="Hausehold"> Hausehold </option>
          <option value="Electronic"> Electronic </option>
          <option value="Toys"> Toys </option>
          <option value="Others"> Others </option>
        </select>
      </div>
      
    </>
  );
}

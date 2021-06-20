import React, { useContext } from "react";
import ProductContext from "../../../../store/productContext";
export default function Condition() {
  const productContext = useContext(ProductContext);
  return (
    <div className="select-group">
      {/* choosing Condition */}
      <select
        defaultValue="Condition"
        name="condition"
        onChange={(event) =>
          productContext.conditionHandler(event.target.value)
        }
        className="dropdown browser-default p-1  rounded"
      >
        <option value="condition"> Condition </option>
        <option value="New"> New </option>
        <option value="Nearly New"> Nearly New </option>
        <option value="Nearly New"> Gently Used </option>
      </select>
    </div>
  );
}

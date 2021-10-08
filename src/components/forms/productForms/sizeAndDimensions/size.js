import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import ProductContext from "../../../../context/productContext";
export default function Size() {
  const productContext = useContext(ProductContext);
  const { t } = useTranslation();
  return (
    <div className="input-field mt-4 mb-4">
      <label htmlFor="title">{t("Size")}</label>
      <input
        defaultValue={
          productContext.product.size ? productContext.product.size : ""
        }
        className="form-control"
        name="size"
        onChange={(event) => productContext.sizeHandler(event.target.value)}
      />
    </div>
  );
}

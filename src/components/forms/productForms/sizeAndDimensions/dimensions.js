import React, {useContext } from "react";
import { useTranslation } from "react-i18next";
import ProductContext from "../../../../context/productContext";
export default function Dimensions() {
  const productContext = useContext(ProductContext);
  const {t}= useTranslation()
  return (
    <div className="input-field mt-4 mb-4">
      <label htmlFor="title">{t('Dimensions')}</label>
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

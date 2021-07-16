import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import ProductContext from "../../../../context/productContext";
export default function Title() {
  const productContext = useContext(ProductContext);
  const {t}= useTranslation()
  return (
    <div className="input-field">
      <label htmlFor="title">{t('Title')}</label>
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

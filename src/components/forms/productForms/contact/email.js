import React, { useContext } from "react";
import ProductContext from "../../../../context/productContext";
import { useTranslation } from "react-i18next";
export default function Email() {
  const productContext = useContext(ProductContext);
  const { t } = useTranslation();
  return (
    <div className="input-field">
      <label htmlFor="contact-email">{t("ContactEmail")}</label>
      <input
        id="contact-email"
        className="form-control "
        type="email"
        name="contact-email"
        placeholder="example@example.com"
        required
        onChange={(event) =>
          productContext.contactEmailHandler(event.target.value)
        }
      />
    </div>
  );
}

import React, { useContext } from "react";
import ProductContext from "../../../../context/productContext";
import { useTranslation } from "react-i18next";
function Information() {
  const { t } = useTranslation();
  const productContext = useContext(ProductContext);
  return (
    <div className="input-field">
      <label htmlFor="detail">{t("MoreInformation")}</label>
      <textarea
      id="detail"
        defaultValue={
          productContext.product.detail
            ? productContext.product.detail
            : ""
        }
        className="form-control"
        name="detail"
        onChange={(event) =>
          productContext.informationHandler(event.target.value)
        }
      ></textarea>
    </div>
  );
}

export default Information;

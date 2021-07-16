import React, { useContext } from "react";
import ProductContext from "../../../../context/productContext";
import { useTranslation } from "react-i18next";
export default function Condition() {
  const productContext = useContext(ProductContext);
  const {t}= useTranslation()
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
        <option value="condition">{t('Condition.1')}</option>
        <option value="New">{t('Condition.new')}</option>
        <option value="Nearly New">{t('Condition.nearlyNew')}</option>
        <option value="Nearly New">{t('Condition.gentlyUsed')}</option>
      </select>
    </div>
  );
}

import React, { useContext } from "react";
import ProductContext from "../../../../context/productContext";
import {useTranslation} from "react-i18next";
export default function Category() {
  const productContext = useContext(ProductContext);
  const {t}= useTranslation()
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
          <option value="">{t('ChooseCategory')}</option>
          <option value="Clothes">{t('Clothes')}</option>
          <option value="Hausehold">{t('Hauseholds')}</option>
          <option value="Electronic">{t('Electronics')}</option>
          <option value="Toys">{t('Toys')}</option>
          <option value="Others">{t('Other')}</option>
        </select>
      </div>
      
    </>
  );
}

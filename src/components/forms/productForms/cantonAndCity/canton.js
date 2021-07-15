import React, { useContext } from "react";
import ProductContext from "../../../../context/productContext";
import citiesJson from "../../../../context/city.json"; //import canton and city information
import {useTranslation} from "react-i18next";
export default function Canton() {
  const productContext = useContext(ProductContext);
  const {t}= useTranslation()
  const cantonArray = [];
  for (let index = 0; index < citiesJson.length; index++) {
    const element = citiesJson[index].canton.NAME;
    if (!cantonArray.includes(element)) {
      cantonArray.push(element);
    }
  }

  return (
    <>
      <div className="select-group" id="deneme">
        {/* choosing canton */}
        <select
          defaultValue="Choose Canton"
          name="choosecanton"
          onChange={(event) => productContext.cantonHandler(event.target.value)}
          className="dropdown browser-default p-1 rounded"
        >
          <option value="">{t('ChooseCanton')}</option>
          {cantonArray.sort().map((canton, index) => (
            <option key={index} value={canton}>
              {canton}
            </option>
          ))}
        </select>
      </div>
      
    </>
  );
}

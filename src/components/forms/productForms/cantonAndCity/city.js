import React, { useContext } from "react";
import ProductContext from "../../../../context/productContext";
import {useTranslation} from "react-i18next";
import citiesJson from "../../../../context/city.json"; //import canton and city information

export default function City() {
  const productContext = useContext(ProductContext);
  const canton = productContext.canton;
  const {t}= useTranslation()

  //canton and city names showing in select option
  const citiesArray = [];
  for (let index = 0; index < citiesJson.length; index++) {
    const element = citiesJson[index].gemeinde.NAME;
    if (citiesJson[index].canton.NAME === canton) {
      citiesArray.push(element);
    }
  }
  return (
    <div className="select-group">
      {/* choosing City */}
      {canton !== "" ? (
        <select
          defaultValue="Choose City"
          name="chooseCity"
          onChange={(event) => productContext.cityHandler(event.target.value)}
          className="dropdown browser-default p-1 rounded"
        >
          <option value="">{t('ChooseCity')}</option>
          {citiesArray.sort().map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      ) : null}
    </div>
  );
}

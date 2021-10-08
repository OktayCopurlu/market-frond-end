import React, { useContext } from "react";
import ProductContext from "../../../../context/productContext";
import { useTranslation } from "react-i18next";
export default function ClothesCategory() {
  const productContext = useContext(ProductContext);
  const { t } = useTranslation();
  return (
    <div className="select-group">
      <select
        defaultValue={
          productContext.product.categoryClothes
            ? productContext.product.categoryClothes
            : "Choose Category"
        }
        name="clothesCategory"
        onChange={(event) =>
          productContext.categoryClothesHandler(event.target.value)
        }
        className="dropdown browser-default p-1  rounded"
      >
        <option value="category">{t("ChooseCategory")}</option>
        <option value="Women's Clothing">{t("Women'sClothing")} </option>
        <option value="Men's Clothing">{t("Men'sClothing")} </option>
        <option value="Children's Clothing(Ages 0 - 6 years)">
          {t("ChildrenClothing6")}
        </option>
        <option value="Children's Clothing(Ages 6 - 12 years)">
          {t("ChildrenClothing12")}
        </option>
      </select>
    </div>
  );
}

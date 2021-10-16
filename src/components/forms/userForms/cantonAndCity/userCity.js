import React, { useContext } from "react";
import Context from "../../../../context/context";
import { useTranslation } from "react-i18next";
export default function UserCity() {
  const context = useContext(Context);
  const { t } = useTranslation();
  return (
    <div className="input-field">
      <label htmlFor="city">{t("City")}</label>
      <input
        id="city"
        className="form-control"
        type="text"
        name="city"
        placeholder=""
        onChange={(event) => context.cityHandler(event.target.value)}
      />
    </div>
  );
}

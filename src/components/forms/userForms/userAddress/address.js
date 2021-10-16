import React, { useContext } from "react";
import Context from "../../../../context/context";
import { useTranslation } from "react-i18next";
export default function Address() {
  const context = useContext(Context);
  const { t } = useTranslation();
  return (
    <div className="input-field">
      <label htmlFor="address">{t("Address")}</label>
      <input
        id="address"
        className="form-control"
        name="address"
        onChange={(event) => context.addressHandler(event.target.value)}
      />
    </div>
  );
}

import React, { useContext } from "react";
import Context from "../../../../context/context";
import { useTranslation } from "react-i18next";
export default function UserCanton() {
  const context = useContext(Context);
  const { t } = useTranslation();
  return (
    <div className="input-field ">
      <label htmlFor="canton">{t("Canton")}</label>
      <input
        id="canton"
        className="form-control"
        name="canton"
        onChange={(event) => context.cantonHandler(event.target.value)}
      />
    </div>
  );
}

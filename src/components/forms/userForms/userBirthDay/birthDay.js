import React, { useContext } from "react";
import Context from "../../../../context/context";
import { useTranslation } from "react-i18next";
export default function BirthDay() {
  const context = useContext(Context);
  const { t } = useTranslation();
  return (
    <>
      <label htmlFor="birthDay" className="label-birthDay">
        {t("BirthDate")}
      </label>
      <div>
        <input
          id="birthDay"
          name="date"
          type="date"
          className="form-control"
          onChange={(event) => context.birthDateHandler(event.target.value)}
        />
      </div>
    </>
  );
}

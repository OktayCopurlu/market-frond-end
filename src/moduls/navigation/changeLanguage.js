import React from "react";
import i18n from "../../i18next";
export default function ChangeLanguage() {
  function handleLanguage(event) {
    try {
      i18n.changeLanguage(event.target.value);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <select
      onChange={handleLanguage}
      className="form-select d-flex multi-languages"
      aria-label="Default select example"
    >
      <option  defaultValue="en">
        EN
      </option>
      <option  value="de">
        DE
      </option>
      <option value="fr">
        FR
      </option>
    </select>
  );
}

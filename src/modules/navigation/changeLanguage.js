import React, { useEffect, useState } from "react";
import i18n from "../../i18next";
export default function ChangeLanguage() {
  const [language, setLanguage] = useState();

  function handleLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }
  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"));
  }, []);
  return (
    <select
      onChange={handleLanguage}
      className="form-select d-flex multi-languages"
      aria-label="Default select example"
    >
      {language === "en" ? (
        <option selected value="en">
          EN
        </option>
      ) : (
        <option value="en">EN</option>
      )}
      {language === "de" ? (
        <option selected value="de">
          DE
        </option>
      ) : (
        <option value="de">DE</option>
      )}
      {language === "fr" ? (
        <option selected value="fr">
          FR
        </option>
      ) : (
        <option value="fr">FR</option>
      )}
    </select>
  );
}

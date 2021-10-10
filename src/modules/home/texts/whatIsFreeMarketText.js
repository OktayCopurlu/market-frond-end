import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function WhatIsFreeMarketText() {
  const { t } = useTranslation();
  const [readMore, setReadMore] = useState(true);

  const openText = () => {
    setReadMore(false);
  };
  const closeText = () => {
    setReadMore(true);
  };
  return (
    <div>
      <p className="mt-4 information-text">{t("WhatIsFreeMarketText.1")}</p>
      {readMore ? (
        <Link
          className="text-decoration-none text-success h5"
          onClick={openText}
        >
          read more
        </Link>
      ) : (
        <>
          <p className="mt-4 information-text">{t("WhatIsFreeMarketText.2")}</p>
          <p className="mt-4 information-text">{t("WhatIsFreeMarketText.3")}</p>

          <Link
            className="text-decoration-none text-danger h5"
            onClick={closeText}
          >
            read less
          </Link>
        </>
      )}
    </div>
  );
}

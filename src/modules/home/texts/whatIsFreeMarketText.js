import React from "react";
import { useTranslation } from "react-i18next";

export default function WhatIsFreeMarketText() {
  const { t } = useTranslation();
  return <p className="mt-4 information-text">{t("WhatIsFreeMarketText")}</p>;
}

import React from "react";
import { useTranslation } from "react-i18next";

export default function Recipients() {
  const {t} = useTranslation()
  return (
    <div>
      <p className="mt-4 information-text">
      {t('RecipientsText')}
      </p>
    </div>
  );
}

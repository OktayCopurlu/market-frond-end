import React from "react";
import { useTranslation } from "react-i18next";
export default function DonorsText() {
const {t} = useTranslation()

  return (
    <div>
      <p className="mt-4 information-text">
      {t('DonorsText')}
      </p>
    </div>
  );
}

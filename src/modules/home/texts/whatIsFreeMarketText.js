import React from "react";
import { useTranslation } from "react-i18next";

export default function WhatIsFreeMarketText() {
const {t} = useTranslation()

  return (
    <div>
      <p className="mt-4 information-text">
        {t('WhatIsFreeMarketText.1')}
      </p>
      <p className="mt-4 information-text">
      {t('WhatIsFreeMarketText.2')}
      </p>
      <p className="mt-4 information-text">
      {t('WhatIsFreeMarketText.3')}
      </p>
    </div>
  );
}

import React from 'react'
import { useTranslation } from "react-i18next";

export default function History() {
const {t} = useTranslation()
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <h3>{t('HistoryText')}</h3>
        </div>
    )
}

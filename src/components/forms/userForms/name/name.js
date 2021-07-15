import React,{useContext} from 'react'
import {useTranslation} from "react-i18next";
import Context from "../../../../context/context"
export default function Name() {
    const context = useContext(Context);
  const {t}= useTranslation()
    return (
        <div className="form-group">
        <label htmlFor="title">{t('FullName')}</label>
        <input
          required
          className="form-control"
          type="text"
          name="name"
          onChange={(event) => context.nameHandler(event.target.value)}
        />
      </div>
    )
}

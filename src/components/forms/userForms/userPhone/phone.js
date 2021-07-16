import React,{useContext} from 'react'
import Context from "../../../../context/context";
import { useTranslation } from 'react-i18next';
export default function Phone() {
  const context = useContext(Context);
  const {t} = useTranslation()
    return (
        <div className="input-field">
        <label htmlFor="contact">{t('Phone')}</label>
        <input
          className="form-control"
          type="number"
          name="contactNumber"
          onChange={(event) => context.phoneHandler(event.target.value)}
        />
      </div>
    )
}

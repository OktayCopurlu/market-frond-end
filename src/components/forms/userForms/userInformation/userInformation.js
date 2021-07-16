import React, {useContext } from "react";
import Context from "../../../../context/context";
import {useTranslation} from "react-i18next";
function UserInformation() {
    const context = useContext(Context);
    const {t}= useTranslation()
    return (
        <div className="input-field">
        <label htmlFor="detail">{t('MoreInformation')}</label>
        <textarea
          className="form-control"
          name="detail"
          onChange={(event) => context.detailHandler(event.target.value)}
        ></textarea>
      </div>
    )
}

export default UserInformation

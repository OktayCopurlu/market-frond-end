import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

export default function BoxesNoAuth() {
    const {t} = useTranslation()
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md text-center mb-2">
              <button className="boxes donate-box bg-primary" onClick={loginWithRedirect}>
             
              </button>
              <h5 className="d-flex justify-content-center">{t('DonateItems')}</h5>

            </div>
            <div className="col-md mb-2">
              <a href="/productList" className="boxes find-box bg-danger" >
              {null}
              </a>
              <h5 className="d-flex justify-content-center">{t('FindItems')}</h5>
            </div>
            <div className="col-md mb-2 ">
              <button className="boxes wish-box bg-info" onClick={loginWithRedirect}>
              </button> 
              <h5 className="d-flex justify-content-center">{t('WishItems')}</h5>
            </div>
          </div>
        </div>
    )
}

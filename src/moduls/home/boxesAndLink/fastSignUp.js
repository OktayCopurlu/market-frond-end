import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function FastSignUp() {
  const {t} = useTranslation()
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="text-center">
        <Link to="/" 
          onClick={loginWithRedirect}
          className="btn mt-5 btn-danger SignUpButton"
        >
          {t('FastSignUp')}
        </Link>
      </div>
    )
}

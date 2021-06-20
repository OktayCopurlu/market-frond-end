import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function FastSignUp() {

    const { loginWithRedirect } = useAuth0();
    return (
        <div className="text-center">
        <Link  to="/" 
          onClick={loginWithRedirect}
          className="btn mt-5 btn-danger SignUpButton"
        >
          Fast SignUp
        </Link>
      </div>
    )
}

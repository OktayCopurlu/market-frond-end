import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const path = window.location.origin;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const recentLocatin = localStorage.getItem('path')
  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || recentLocatin);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={path}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
      scope="read:current_user update:current_user_metadata"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;

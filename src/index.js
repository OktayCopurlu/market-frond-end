import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import Compose from "./store/compose";
import { ContextProvider } from "./store/context";
import { ProductContextProvider } from "./store/productContext"
ReactDOM.render(
  <Compose components={[Router, Auth0ProviderWithHistory, ProductContextProvider, ContextProvider]}>
    <App />
  </Compose>,
  document.getElementById("root")
);

import React from "react";
import BoxesInAuth from "./boxesInAuth";
import BoxesNoAuth from "./boxesNoAuth";
import { useAuth0 } from "@auth0/auth0-react";

export default function Boxes() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <BoxesInAuth/> //boxes when user login
      ) : (
        <BoxesNoAuth/>//boxes when user logout
      )}
    </>
  );
}

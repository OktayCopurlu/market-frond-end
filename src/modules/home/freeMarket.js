import React from "react";
import "./freeMarket.css";
import { useAuth0 } from "@auth0/auth0-react";
import FastSignUp from "./boxesAndLink/fastSignUp";
import Boxes from "./boxesAndLink/boxes";
import HomeCarousel from "./carousel"
import { useLocation } from "react-router";

export default function FreeMarket() {
  const { isAuthenticated } = useAuth0();
  const location = useLocation()
  localStorage.setItem('path', location.pathname);
  return (
    <>
      <div className="freemarket">
        <HomeCarousel/>
        {!isAuthenticated ? (
          <FastSignUp /> //fast sign Up button
        ) : null}
      </div>
      <Boxes/>
    </>
  );
}

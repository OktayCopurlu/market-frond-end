import React from "react";
import "./freeMarket.css";
import { useAuth0 } from "@auth0/auth0-react";
import FastSignUp from "./boxesAndLink/fastSignUp";
import Boxes from "./boxesAndLink/boxes";
import HomeCarousel from "./carousel"

export default function FreeMarket() {
  const { isAuthenticated } = useAuth0();
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

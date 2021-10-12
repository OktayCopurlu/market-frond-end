import React from "react";
import Contact from "../../../components/forms/productForms/contact/contact";

export default function FourPageForm() {
  const style = {
    position: "relative",
    top: "38px",
    margin: "0 0 0 auto",
    display: "block",
  };
  return (
    <>
      <Contact />
      <input
        style={style}
        type="submit"
        value="Save and Publish"
        className="btn btn-primary"
      />
    </>
  );
}

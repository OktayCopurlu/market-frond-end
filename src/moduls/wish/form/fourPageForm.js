import React from "react";
import Contact from "../../../components/forms/productForms/contact/contact";


export default function FourPageForm() {
  return (
    <> <Contact /> 
    <div className="form-group">
      <input
        type="submit"
        value="Save"
        className="btn btn-primary"
      />
    </div></>
  );
}

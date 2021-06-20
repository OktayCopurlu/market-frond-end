import React from "react";
import Photos from "../../../components/forms/productForms/categoryAndPhotos/photos";

export default function FourPageForm() {
  return (
    <>
      <Photos />
      <div className="form-group">
        <input
          type="submit"
          value="Save"
          className="btn btn-primary"
        />
      </div>
    </>
  );
}

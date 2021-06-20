import React from "react";
import UpdateUserPicture from "./updateUserPicture";
import Phone from "../../../../components/forms/userForms/userPhone/phone";

export default function FourPageForm() {
  return (
    <>
    <Phone />
    <UpdateUserPicture />
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

import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import productContext from "../../../context/productContext";
import * as deleteAlert from "./confirmAlert";
import Context from "../../../context/context";

export default function DeleteUser() {
  const { user, logout } = useAuth0();
  const productsContext = useContext(productContext);
  const context = useContext(Context);


  function onSubmit(event) {
    event.preventDefault();
    context.closedModalHandler(false);
    deleteAlert.confirmAlertDelete(user, productsContext, logout);
  }
  return (
    <div className="d-flex justify-content-center m-5">
      <button className="btn btn-danger" onClick={onSubmit}>
        Delete
      </button>
    </div>
  );
}

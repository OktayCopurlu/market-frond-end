import React, { useState } from "react";
import "../listProduct/main/productList.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import * as productActions from "../../../services/products-service";
import * as wishesActions from "../../../services/wishes-service";
import { useAuth0 } from "@auth0/auth0-react";

export default function DeleteProduct(props) {
  const id = props.value;
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState();
  getAccessTokenSilently().then((token) => setToken(token));

  function onSubmit() {
    confirmAlert({
      title: "Are you sure?",
      message: "if you delete the item you can not bring it back  again",
      buttons: [
        {
          label: "Delete",
          onClick: () => {
            productActions.deleteProducts(id, token);
            wishesActions.deleteWishes(id, token);
          },
        },
        {
          label: "No",
          onClick: () => alert("Product was not deleted."),
        },
      ],
    });
  }
  return (
    <button
      className="userProductButton btn btn-danger"
      type="submit"
      onClick={onSubmit}>
      Delete
    </button>
  );
}

import React, { useState } from "react";
import "../listProduct/main/productList.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import * as productActions from "../../../services/products-service";
import * as wishesActions from "../../../services/wishes-service";
import { useAuth0 } from "@auth0/auth0-react";
import {useTranslation} from "react-i18next"
export default function DeleteProduct(props) {
  const id = props.value;
  const {t}= useTranslation()
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState();
  getAccessTokenSilently().then((token) => setToken(token));

  
  function onSubmit() {
    confirmAlert({
      title:t('DeleteAlert.title'),
      message:t('DeleteAlert.message'),
      buttons: [
        {
          label:t('Delete'),
          onClick: () => {
            productActions.deleteProducts(id, token);
            wishesActions.deleteWishes(id, token);
            alert(t('DeleteAlert.deleted'))
          },
        },
        {
          label: "No",
        },
      ],
    });
  }
  return (
    <button
      className="userProductButton btn btn-danger"
      type="submit"
      onClick={onSubmit}>
      {t('Delete')}
    </button>
  );
}

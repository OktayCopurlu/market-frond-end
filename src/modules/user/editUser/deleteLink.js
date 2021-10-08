import React, { useContext } from "react";
import Context from "../../../context/context";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
export default function DeleteLink() {
  const context = useContext(Context);
  const {t}= useTranslation()
  function onSubmit(event) {
    event.preventDefault();
    context.stateHandler(event.target.value);
    context.closedModalHandler(true);
  }
  return (
    <Link to="#" className="nav-item active font-weight-bold">
      <button
        className="btn btn-link text-info"
        value="delete"
        onClick={onSubmit}
      >
      {t('DeleteAccount')}
      </button>
    </Link>
  );
}

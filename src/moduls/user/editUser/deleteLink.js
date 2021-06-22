import React, { useContext } from "react";
import Context from "../../../context/context";
import { Link } from "react-router-dom";

export default function DeleteLink() {
  const context = useContext(Context);
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
        Delete Account
      </button>
    </Link>
  );
}

import React, { useState, useContext } from "react";
import EditUserDetail from "./editUserDetail";
import DeleteUser from "../deleteUser/deleteUser";
import EditLink from "./editLink";
import DeleteLink from "./deleteLink";
import { Link } from "react-router-dom";
import Context from "../../../store/context";
import * as modalCss from "./modalCss";
import * as paperCss from "./modalPaperCss";
export default function NavbarModal() {
  const context = useContext(Context);
  const state = context.state;
  const modalStyles = modalCss.getModalStyle;
  const [modalStyle] = useState(modalStyles);
  const classes = paperCss.useStyles();
  function handleClose(event) {
    event.preventDefault();
    context.closedModalHandler(false);
  }
  return (
    <div style={modalStyle} className={classes.paper}>
      <Link to="#" onClick={handleClose} className="close-modal">
        Close
      </Link>
      {state === "detail" ? (
        <EditUserDetail />
      ) : (
        <ul className="navbar-nav align-items-center mt-5 pt-5">
          <EditLink />
          <DeleteLink />
        </ul>
      )}
      {state === "delete" ? <DeleteUser /> : null}
    </div>
  );
}

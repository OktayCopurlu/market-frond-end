import React, { useContext } from "react";
import EditUserDetail from "./editUserDetail";
import DeleteUser from "../deleteUser/deleteUser";
import EditLink from "./editLink";
import DeleteLink from "./deleteLink";
import Context from "../../../context/context";
import * as paperCss from "./modalPaperCss";

export default function NavbarModal() {
  const context = useContext(Context);
  const state = context.state;
 
  const classes = paperCss.useStyles();
  function handleClose(event) {
    event.preventDefault();
    context.closedModalHandler(false);
  }
  return (
    <div className="d-flex justify-content-center ">
    <div  className={classes.paper}>
      <button onClick={handleClose} className="close-modal btn btn-link text-info">
        Close
      </button>
      {state === "detail" ? (
        <EditUserDetail />
      ) : (
        <ul className="navbar-nav align-items-center mt-5 pt-5">
          <EditLink />
          <DeleteLink />
        </ul>
      )}
      {state === "delete" ? <DeleteUser /> : null}
    </div></div>
  );
}

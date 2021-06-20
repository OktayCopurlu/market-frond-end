import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Modal from "@material-ui/core/Modal";
import Context from "../../../store/context";
import NavbarModal from "./navbarModal";

export default function MainModal() {
  const context = useContext(Context);
  const open = context.closedModal;

  function onSubmit(event) {
    event.preventDefault();
    context.stateHandler(event.target.value);
    context.closedModalHandler(true);
  }

  function handleClose(event) {
    event.preventDefault();
    context.closedModalHandler(false);
  }

  return (
    <div className="d-flex justify-content-center ">
      <Link to="#" onClick={onSubmit} className="btn btn-link text-info">
        Edit My Detail
      </Link>
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <NavbarModal/>
        </div>
      </Modal>
    </div>
  );
}

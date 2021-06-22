import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../../context/context";
import EditProductOrWish from "../editUser/editProductOrWish";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

export default function ProductEditModal(props) {
  const element = props.element;
  const context = useContext(Context);
  //   const history = useHistory();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      padding: 35,
      borderRadius: 16,
    },
  }));
  const classes = useStyles();
  
  function onSubmit(event) {
    event.preventDefault();
    setOpen(true);
    context.product(event.target.value); //for edit
    // history.replace("/ProductEdit");
  }
  function handleClose(event) {
    event.preventDefault();
    setOpen(false);
  }
  return (
    <>
      <button
        value={element._id}
        onClick={onSubmit}
        className="userProductButton btn btn-warning mr-1"
      >
        Edit
      </button>
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Link to="#" onClick={handleClose} className="close-modal">
            Close
          </Link>
          <EditProductOrWish />
        </div>
      </Modal>
    </>
  );
}

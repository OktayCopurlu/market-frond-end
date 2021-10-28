import React, { useContext, useState} from "react";
import { Link } from "react-router-dom";
import Context from "../../../context/context";
import EditProductOrWish from "../editUser/editProductOrWish";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

export default function ProductEditModal(props) {
  const id = props.element;
  const context = useContext(Context);
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
    console.log(id)
    setOpen(true);
    context.product(id); //for edit
  }
  function handleClose(event) {
    event.preventDefault();
    setOpen(false);
  }
  return (
    <>
      <Link
        onClick={onSubmit}
        className="text-dark"
      >
        <i class="fas fa-edit"></i> 
      </Link>
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

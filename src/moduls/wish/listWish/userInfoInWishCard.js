import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

export default function UserInfoInWishCard(props) {
  const user = props.user;

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

  function handleClose(event) {
    event.preventDefault();
    setOpen(false);
  }
  function handleOpen(event) {
    event.preventDefault();
    setOpen(true);
  }
  return (
    <>
      <Link to="#">
        <img
          onClick={handleOpen}
          id={user}
          src={user?.picture}
          alt="no photos"
          className="rounded-circle ml-4 wishListImage"
        />
        <h6 onClick={handleOpen} id={user.user_id} className="text-dark">
          {user?.name}
        </h6>
      </Link>
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <img src={user?.picture} alt="no photos" className="rounded-circle" />
          <h5>{user?.name}</h5>
          <div>
            <p>{user?.user_metadata?.job}</p>
            <p>{user?.user_metadata?.detail}</p>
            <p>{user?.user_metadata?.canton}</p>
            <p>{user?.user_metadata?.city}</p>
            <p>{user?.user_metadata?.contactNumber}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import "./messages.css";
import {
  getProductMessages,
  postMessage,
} from "../../services/message-service";

import { getUserInformationFromMangoDB } from "../../services/users-service";
export default function Messages(props) {
  const [messages, setMessages] = useState([]);
  const productInfo = props.element;
  const productID = productInfo._id;
  const productOwnerID = productInfo.mongoUserID;
  const [userID, setUserID] = useState();
  const { user } = useAuth0();
  const [open, setOpen] = useState(false);
  const [messagesString, setMessageString] = useState();
  let recipientID = productOwnerID;
  function handleClose(event) {
    event.preventDefault();
    setOpen(false);
  }
  function handleOpen(event) {
    event.preventDefault();
    setOpen(true);
    getProductMessages(productID).then((messages) => {
      setMessages(messages);
    });
  }
  const sendMessage = (event) => {
    event.preventDefault();
    messages.map((message) => {
      if (message.productID === productID) {
        if (message.senderID === userID) {
          return (recipientID = message.recipientID);
        } else {
          return (recipientID = message.senderID);
        }
      } else {
        return (recipientID = productOwnerID);
      }
    });

    const body = {
      recipientID: recipientID,
      senderID: userID,
      senderName: user.name,
      message: messagesString,
      productID: productID,
    };

    if (!(userID === recipientID)) {
      return postMessage(body);
    }
    getProductMessages(productID).then((messages) => {
      setMessages(messages);
    });
  };
  useEffect(() => {
    getUserInformationFromMangoDB(user).then((user) => setUserID(user[0]._id));
    getProductMessages(productID).then((messages) => {
      setMessages(messages);
    });
  }, []);

  return (
    <div>
      <Link onClick={handleOpen} to="#" className="chat">
        Chat
      </Link>
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal-container">
          <section className="h-100 w-100 p-3 d-flex flex-column messages-section">
            {messages.map((message) => {
              return message.productID === productID &&
                message.senderID === userID ? (
                <div className="d-flex flex-row-reverse sender-messages-container">
                  <p className="text-dark w-75 text-right border  sender-message">
                    {message.message}
                  </p>
                </div>
              ) : message.productID === productID &&
                message.recipientID === userID ? (
                <div className="d-flex flex-row">
                  <p className=" w-75 border recipient-message">
                    {message.message}
                  </p>
                </div>
              ) : null;
            })}
          </section>

          <form onSubmit={(e) => sendMessage(e)} className="input-group">
            <input
              onChange={(event) => setMessageString(event.target.value)}
              type="text-area"
              className="form-control message-input"
              placeholder="Type your "
            />
            <div className="input-group-append ">
              <button
                disabled={!messagesString}
                className="btn btn-primary send-btn"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

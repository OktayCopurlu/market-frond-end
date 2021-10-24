import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
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
  const productOwnerEmail = productInfo.contactEmail;
  const [userID, setUserID] = useState();
  const { user } = useAuth0();
  const [open, setOpen] = useState(false);
  const [messagesString, setMessageString] = useState();
  let recipientEmail = productOwnerEmail;
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

  function defineRecipientUser(){
    messages.forEach((message) => {
      if (message.productID === productID) {
        if (message.senderID === userID) {
          recipientEmail = message.recipientEmail;
          recipientID = message.recipientID;
        } else {
          recipientEmail = user.email;
          recipientID = message.senderID;
        }
      } else {
        recipientEmail = productOwnerEmail;
        recipientID = productOwnerID;
      }
    });
  }
  defineRecipientUser()

  function sendMessage(event) {
    event.preventDefault();

    const body = {
      recipientID: recipientID,
      recipientEmail: recipientEmail,
      senderID: userID,
      senderEmail: user.email,
      productID: productID,
      message: messagesString,
    };

    if (!(userID === recipientID)) {
      return postMessage(body);
    }
    
    getProductMessages(productID).then((messages) => {
      setMessages(messages);
    });
  }
  useEffect(() => {
    getUserInformationFromMangoDB(user).then((user) => {
      setUserID(user[0]._id);
    });
    getProductMessages(productID).then((messages) => {
      setMessages(messages);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button onClick={handleOpen} to="#" className="chat btn btn-danger">
        Chat
      </button>
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal-container">
          <section className="h-100 w-100 p-3 d-flex flex-column-reverse messages-section">
            {messages.reverse().map((message, index) => {
              return message.productID === productID &&
                message.senderID === userID ? (
                <div
                  key={index}
                  className="d-flex flex-row-reverse sender-messages-container"
                >
                  <p className="text-dark w-75 text-right border  sender-message">
                    {message.message}
                  </p>
                </div>
              ) : message.productID === productID &&
                message.recipientID === userID ? (
                <div key={index} className="d-flex flex-row">
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
              placeholder="Type your message"
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

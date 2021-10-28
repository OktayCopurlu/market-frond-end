import React, { useEffect, useState, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "@material-ui/core/Modal";
import { postMessage, getUserMessages } from "../../services/message-service";
import {
  getUserInformationFromMongoDB,
  getUserMongoID,
} from "../../services/users-service";
import "./messages.css";

export default function UserMessages() {
  const messagesInput = useRef(null);
  const [messages, setMessages] = useState([]);
  const { user } = useAuth0();
  const [open, setOpen] = useState(false);
  const [messagesString, setMessageString] = useState();
  const [mongoUserID, setMongoUserID] = useState();
  const [recipientID, setRecipientID] = useState();
  const [recipientEmail, setRecipientEmail] = useState();
  const [list, setList] = useState(true);

  const userEmails = [];
  const emails = [];

  function handleClose(event) {
    event.preventDefault();
    setOpen(false);
  }

  function handleOpen(event) {
    event.preventDefault();
    setOpen(true);
    getUserMessages(mongoUserID).then((messages) => {
      setMessages(messages);
    });
  }

  function sendMessage(event) {
    event.preventDefault();

    messagesInput.current.value = "";

    const body = {
      recipientID: recipientID,
      senderID: mongoUserID,
      senderEmail: user.email,
      message: messagesString,
      recipientEmail: recipientEmail,
    };

    postMessage(body).then(() => {
      getUserMessages(mongoUserID).then((messages) => {
        setMessages(messages.reverse());
      });
    });
  }

  function changeRecipient(email) {
    getUserMongoID(email).then((recipient) => {
      setRecipientID(recipient[0]._id);
    });
    setRecipientEmail(email);
  }

  const userMessages = messages.filter((message) => {
    if (
      message.senderID === recipientID ||
      message.recipientID === recipientID
    ) {
      return true;
    } else {
      return false;
    }
  });

  function filterUserEmails() {
    messages.forEach((message) => {
      if (message.senderID !== user.mongoUserID) {
        return userEmails.push(message.senderEmail);
      }
    });

    userEmails.forEach((email) => {
      if (!emails.includes(email) && email !== user.mongoUseremail) {
        emails.push(email);
      }
    });
  }
  filterUserEmails();

  useEffect(() => {
    getUserInformationFromMongoDB(user).then((user) =>
      setMongoUserID(user[0]._id)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <button
        onClick={handleOpen}
        to="#"
        className="chat btn btn-danger px-5 m-2"
      >
        Chat
      </button>
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal-container-user">
          <div className="d-flex bg-light justify-content-between">
            <h5 className="text-center user-name-top">{recipientEmail}</h5>
            <button
              className="btn btn-secondary rounded-0 user-list-open-close-btn"
              onClick={() => setList(!list)}
            >
              {list === true ? ">" : "<"}
            </button>
          </div>
          <main className="d-flex h-100 messages-main">
            <section className="h-100 w-100 p-3 d-flex flex-column-reverse messages-section">
              {userMessages.map((message, index) => {
                return message.senderID === mongoUserID ? (
                  <div
                    key={index}
                    className="d-flex flex-row-reverse sender-messages-container"
                  >
                    <p className="text-dark text-right border sender-message">
                      {message.message}
                    </p>
                  </div>
                ) : message.recipientID === mongoUserID ? (
                  <div key={index} className="d-flex flex-row">
                    <p className=" border recipient-message">
                      {message.message}
                    </p>
                  </div>
                ) : null;
              })}
            </section>
            <section
              className={`user-list ${
                list === true ? "open-user-list" : "close-user-list"
              }`}
            >
              {emails.map((email, index) => {
                return email !== user.email ? (
                  <button
                    onClick={(event) => changeRecipient(event.target.value)}
                    value={email}
                    key={index}
                    className="d-block btn btn-light text-left w-100 rounded-0  border-top "
                  >
                    {email}
                  </button>
                ) : null;
              })}
            </section>
          </main>
          <form onSubmit={(e) => sendMessage(e)} className="input-group">
            <input
              ref={messagesInput}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { useTranslation } from "react-i18next";
import * as userInfo from "./userInfoWishCardStyle";
export default function UserInfoInWishCard(props) {
  const user = props.user;
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const classes = userInfo.useStyles();
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
      <Link to="#" className="d-flex">
        <img
          alt="no-icon"
          onClick={handleOpen}
          id={user.user_id}
          className="detail-icon mr-2"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTguNDUzIDE4LjQ1MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTguNDUzIDE4LjQ1MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxyZWN0IHg9IjIuNzExIiB5PSI0LjA1OCIgc3R5bGU9ImZpbGw6IzAzMDEwNDsiIHdpZHRoPSI4LjIzIiBoZWlnaHQ9IjEuMzM0Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMzAxMDQ7IiBkPSJNMTQuOTcyLDE0LjA4OGMwLjYzOC0xLjEyNywwLjQ1My0yLjU2My0wLjQ3NS0zLjQ5Yy0wLjU0OS0wLjU0OS0xLjI3OS0wLjg1Mi0yLjA1OC0wLjg1Mg0KCQkJYy0wLjc3OSwwLTEuNTEsMC4zMDMtMi4wNTksMC44NTJzLTAuODUyLDEuMjc5LTAuODUyLDIuMDU5YzAsMC43NzcsMC4zMDMsMS41MDgsMC44NTIsMi4wNTljMC41NDksMC41NDcsMS4yNzksMC44NSwyLjA1NywwLjg1DQoJCQljMC41MDcsMCwwLjk5OC0wLjEyOSwxLjQzNC0wLjM3NWwzLjI2MiwzLjI2MmwxLjEwMS0xLjEwMkwxNC45NzIsMTQuMDg4eiBNMTMuNjY0LDEzLjg4MWMtMC42NTIsMC42NTItMS43OTYsMC42NTItMi40NDgsMA0KCQkJYy0wLjY3NS0wLjY3Ni0wLjY3NS0xLjc3MywwLTIuNDQ5YzAuMzI2LTAuMzI2LDAuNzYyLTAuNTA2LDEuMjI1LTAuNTA2czAuODk3LDAuMTgsMS4yMjQsMC41MDZzMC41MDcsMC43NjIsMC41MDcsMS4yMjUNCgkJCVMxMy45OTEsMTMuNTU0LDEzLjY2NCwxMy44ODF6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMzAxMDQ7IiBkPSJNMTMuMzMyLDE2LjNIMS44NTdjLTAuMTgyLDAtMC4zMjktMC4xNDgtMC4zMjktMC4zMjhWMS42MzhjMC0wLjE4MiwwLjE0Ny0wLjMyOSwwLjMyOS0wLjMyOQ0KCQkJaDExLjQ3NWMwLjE4MiwwLDAuMzI4LDAuMTQ3LDAuMzI4LDAuMzI5VjguOTVjMC40NzUsMC4xMDQsMC45MTgsMC4zMDcsMS4zMSwwLjU5N1YxLjYzOEMxNC45NywwLjczNSwxNC4yMzYsMCwxMy4zMzIsMEgxLjg1Nw0KCQkJQzAuOTU0LDAsMC4yMTksMC43MzUsMC4yMTksMS42Mzh2MTQuMzM0YzAsMC45MDIsMC43MzUsMS42MzcsMS42MzgsMS42MzdoMTEuNDc1YzAuNjg1LDAsMS4wMDktMC4xNjIsMS4yNTMtMC43NmwtMC41OTQtMC41OTQNCgkJCUMxMy43NzIsMTYuMzQ3LDEzLjQyNiwxNi4zLDEzLjMzMiwxNi4zeiIvPg0KCQk8cmVjdCB4PSIyLjcxMSIgeT0iNy44MTgiIHN0eWxlPSJmaWxsOiMwMzAxMDQ7IiB3aWR0aD0iOC4yMyIgaGVpZ2h0PSIxLjMzNCIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
        />
        <h6 onClick={handleOpen} id={user.user_id} className="text-dark">
          {user.user_metadata?.name ? user.user_metadata?.name : user.name}
        </h6>
      </Link>
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
          <div className="user-card">
            {!user.user_metadata?.picture ? (
              <img className="w-25 mt-4" src={user.picture} alt={user.name} />
            ) : (
              <img
                className="w-25 mt-4"
                src={user.user_metadata?.picture}
                alt={user.name}
              />
            )}
            <h3 className="p-0">
              {" "}
              {user.user_metadata?.name ? user.user_metadata?.name : user.name}
            </h3>
            <h4 className="p-0">{user.user_metadata?.job}</h4>
            <p className="d-flex ml-5">
              <span className="h6 mr-3">{t("BirthDate")} :</span>{" "}
              <span>{user.user_metadata?.birthDate}</span>
            </p>
            <p className="d-flex ml-5">
              <span className="h6 mr-3">{t("Detail")} : </span>
              <span>{user.user_metadata?.detail}</span>
            </p>
            <p className="d-flex ml-5">
              <span className="h6 mr-3">{t("Address")} :</span>{" "}
              <span>{user.user_metadata?.address}</span>
            </p>
            <p className="d-flex ml-5">
              <span className="h6 mr-3">{t("Canton")} :</span>
              <span> {user.user_metadata?.canton}</span>
            </p>
            <p className="d-flex ml-5">
              <span className="h6 mr-3">{t("City")} : </span>
              <span>{user.user_metadata?.city}</span>
            </p>
            <p className="d-flex ml-5">
              <span className="h6 mr-3">{t("Phone")} :</span>{" "}
              <span>{user.user_metadata?.contactNumber}</span>
            </p>
            {user.user_metadata?.instagram ? (
              <a
                className="social-media"
                target="_blank"
                rel="noreferrer"
                href={user.user_metadata?.instagram}
              >
                <i className="fab fa-instagram"></i>
              </a>
            ) : (
              <a
                className="social-media"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/swissoktay/"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {user.user_metadata?.twitter ? (
              <a
                className="social-media"
                target="_blank"
                rel="noreferrer"
                href={user.user_metadata?.twitter}
              >
                <i className="fab fa-twitter"></i>
              </a>
            ) : (
              <a
                className="social-media"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Oktay18521974"
              >
                <i className="fab fa-twitter"></i>
              </a>
            )}
            {user.user_metadata?.facebook ? (
              <a
                className="social-media"
                target="_blank"
                rel="noreferrer"
                href={user.user_metadata?.facebook}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            ) : (
              <a
                className="social-media"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/oktay.copurlu"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            )}
            <p>
              <button className="user-contact-button mt-3">{user.email}</button>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}

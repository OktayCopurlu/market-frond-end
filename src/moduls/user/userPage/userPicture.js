import React from "react";

export default function UserPicture(props) {
  const { userMetadata, picture } = props.element;
  return (
    <div className="d-flex justify-content-center col-md-2  m-3">
      {userMetadata?.picture ? (
        <img
          src={userMetadata.picture}
          alt="Profile"
          className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
        />
      ) : (
        <img
          src={picture}
          alt="Profile"
          className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
        />
      )}
    </div>
  );
}

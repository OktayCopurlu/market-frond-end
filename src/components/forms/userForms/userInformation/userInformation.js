import React, {useContext } from "react";
import Context from "../../../../context/context";

function UserInformation() {
    const context = useContext(Context);
    return (
        <div className="input-field">
        <label htmlFor="detail"> More information </label>
        <textarea
          className="form-control"
          name="detail"
          onChange={(event) => context.detailHandler(event.target.value)}
        ></textarea>
      </div>
    )
}

export default UserInformation

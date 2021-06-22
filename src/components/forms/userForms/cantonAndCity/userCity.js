import React, { useContext } from "react";
import Context from "../../../../context/context";

export default function UserCity() {
  const context = useContext(Context);
    return (
        <div className="input-field">
        <label htmlFor="city"> City </label>
        <input
          className="form-control"
          type="text"
          name="city"
          placeholder=""
          onChange={(event) => context.cityHandler(event.target.value)}
        />
      </div>
    )
}

import React, { useContext } from "react";
import Context from "../../../../context/context";

export default function Address() {
  const context = useContext(Context);

  return (
    <div className="input-field">
      <label htmlFor="address"> Address </label>
      <input
        className="form-control"
        name="address"
        onChange={(event) => context.addressHandler(event.target.value)}
      />
    </div>
  );
}

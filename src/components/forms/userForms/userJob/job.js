import React, { useContext } from "react";
import Context from "../../../../context/context";

export default function Job() {
  const context = useContext(Context);

  return (
    <div className="input-field">
      <label htmlFor="job"> Job </label>
      <input
        className="form-control mt-2"
        type="text"
        name="job"
        onChange={(event) => context.jobHandler(event.target.value)}
      />
    </div>
  );
}

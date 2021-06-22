import React, { useContext } from "react";
import Context from "../../../../context/context";

export default function Adress() {
  const context = useContext(Context);

  return (
    <div className="input-field">
      <label htmlFor="adress"> adress </label>
      <input
        className="form-control"
        name="adress"
        onChange={(event) => context.adressHandler(event.target.value)}
      />
    </div>
  );
}

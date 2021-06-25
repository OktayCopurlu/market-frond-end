import React, { useContext } from "react";
import Context from "../../../../store/context";

export default function BirthDay() {
  const context = useContext(Context);

  return (
    <>
      <label className="label-birthDay"> Birth Date </label>
      <div>
        <input
          name="date"
          type="date"
          className="form-control"
          onChange={(event) => context.birthDateHandler(event.target.value)}
        />
      </div>
    </>
  );
}

import React, { useContext } from "react";
import Context from "../../../../store/context";
export default function UserCanton() {
  const context = useContext(Context);
    return (
        <div className="input-field ">
        <label htmlFor="canton"> Canton </label>
        <input
          className="form-control"
          name="canton"
          onChange={(event) => context.cantonHandler(event.target.value)}
        />
      </div>
    )
}

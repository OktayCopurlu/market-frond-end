import React,{useContext} from 'react'
import Context from "../../../../context/context";

export default function Phone() {
  const context = useContext(Context);

    return (
        <div className="input-field">
        <label htmlFor="contact"> Contact Phone Number </label>
        <input
          className="form-control"
          type="number"
          name="contactNumber"
          onChange={(event) => context.phoneHandler(event.target.value)}
        />
      </div>
    )
}

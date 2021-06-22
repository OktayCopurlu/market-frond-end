import React,{useContext} from 'react'
import Context from "../../../../context/context"
export default function Name() {
    const context = useContext(Context);

    return (
        <div className="form-group">
        <label htmlFor="title"> Full Name </label>
        <input
          required
          className="form-control"
          type="text"
          name="name"
          onChange={(event) => context.nameHandler(event.target.value)}
        />
      </div>
    )
}

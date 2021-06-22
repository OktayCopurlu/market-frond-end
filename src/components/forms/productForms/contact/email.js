import React, {useContext } from "react";
import ProductContext from "../../../../context/productContext";

export default function Email() {
    const productContext = useContext(ProductContext);   

    return (
        <div className="input-field">
        <label htmlFor="contact">Email</label>
          <input
          className="form-control "
          type="email"
          name="contact"
          placeholder="example@example.com"
          required
          onChange={(event) => productContext.contactEmailHandler(event.target.value)}
        />
      </div>
    )
}

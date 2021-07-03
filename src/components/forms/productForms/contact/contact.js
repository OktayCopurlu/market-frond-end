import React, {useContext } from "react";
import ProductContext from "../../../../context/productContext";

export default function Contact() {
 const productContext = useContext(ProductContext);   
    return (
      <div className="input-field">
        <label htmlFor="contact"> Contact Tel</label>
        <input
          className="form-control "
          type="tel"
          name="contact"
          placeholder="088 888 88 88"
          required
          onChange={(event) => productContext.contactTelHandler(event.target.value)}
        /> 
        
        <label htmlFor="contact">or Email</label>
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

      
       
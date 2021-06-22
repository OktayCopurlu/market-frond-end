import React, { useContext, useState } from "react";
import Email from "../../components/forms/productForms/contact/email";
import Name from "../../components/forms/userForms/name/name";
import Title from "../../components/forms/productForms/title/title";
import Message from "../../components/forms/footerForms/message/message";
import SubmitButton from "../../components/forms/footerForms/button/submitButton";
import Context from "../../context/context";
import ProductContext from "../../context/productContext";
import * as emailService from "../../services/footer-service";
import Messages from "./messages";
import "./footer.css";

export default function EmailForm() {
  const productContext = useContext(ProductContext);
  const context = useContext(Context);
  const [message, setMessage] = useState(false);
  const sendEmail = async (event) => {
    const name = context.name;
    const email = productContext.contactEmail;
    const title = productContext.title;
    const message = productContext.information;
    event.preventDefault();
    try {
      const result = await emailService.sendEmail(name, email, title, message);
      return await setMessage(result); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      {!message ? (
        <form className="footer-contact" onSubmit={sendEmail}>
          <Name />
          <Email />
          <Title />
          <Message />
          <SubmitButton />
        </form>
      ) : (
        <Messages element={message} />
      )}
    </div>
  );
}

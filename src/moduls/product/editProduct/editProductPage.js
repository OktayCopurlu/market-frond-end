import React, { useContext } from "react";
import Context from "../../../store/context";
import Message from "./messages/message";
import EditForm from "./editForm";

export default function EditProductCard(props) {
  const elements = props.elements;
  const context = useContext(Context);
 
  return (
    <div className="d-flex justify-content-center col">
      {context.isSuccess === null ? <EditForm elements={elements}/> : <Message />}
    </div>
  );
}

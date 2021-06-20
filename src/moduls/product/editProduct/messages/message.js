import React, { useContext } from "react";
import Context from "../../../../store/context";
import SuccessText from "./successText";
import NotSuccessText from "./notSuccessText";
export default function Message() {
  const context = useContext(Context);

  return <>{context.isSuccess ? <SuccessText /> : <NotSuccessText />}</>;
}

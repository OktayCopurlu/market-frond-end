import React, { useContext } from "react";
import FirstPageForm from "./firstPageForm";
import SecondPageForm from "./secondPageForm";
import ThreePageForm from "./threePageForm";
import FourPageForm from "./fourPageForm";
import ButtonForm from "./buttonForm";
import Context from "../../../store/context";
export default function MainForm(props) {
  const context = useContext(Context);
  const page = context.pageForm;


  return (
    <div>
      {page === 1 ? (
        <FirstPageForm />
      ) : page === 2 ? (
        <SecondPageForm />
      ) : page === 3 ? (
        <ThreePageForm  />
      ) : page === 4 ? (
        <FourPageForm />
      ) : null}
      <ButtonForm />
    </div>
  );
}

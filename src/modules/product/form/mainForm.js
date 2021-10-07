import React, { useContext } from "react";
import FirstPageForm from "./firstPageForm";
import SecondPageForm from "./secondPageForm";
import ThreePageForm from "./threePageForm";
import FourPageForm from "./fourPageForm";
import ButtonForm from "./buttonForm";
import Context from "../../../context/context";
export default function MainForm(props) {
  const context = useContext(Context);
  const page = context.pageForm;
  const mainCategory = props.mainCategory;

  return (
    <div>
      {page === 1 ? (
        <FirstPageForm mainCategory={mainCategory} />
      ) : page === 2 ? (
        <SecondPageForm mainCategory={mainCategory} />
      ) : page === 3 ? (
        <ThreePageForm mainCategory={mainCategory} />
      ) : page === 4 ? (
        <FourPageForm mainCategory={mainCategory} />
      ) :null}
      <ButtonForm />
    </div>
  );
}

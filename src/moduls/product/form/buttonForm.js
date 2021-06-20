import React, { useContext } from "react";
import Context from "../../../store/context";
import { Link } from "react-router-dom";

export default function ButtonForm() {
  const context = useContext(Context);
  const page = context.pageForm;

  function backPage(event) {
    event.preventDefault();
    if (page > 1) {
      context.pageFormHandler(page - 1);
    }
  }

  function nextPage(event) {
    event.preventDefault();
    if (page < 4) {
      context.pageFormHandler(page + 1);
    }
  }
  return (
    <div className="d-flex justify-content-between">
      {page > 1 ? (
        <Link to="#" onClick={backPage}>
          Back
        </Link>
      ) : (
        <Link to="#" className="disabled-back" onClick={backPage}>
          Back
        </Link>
      )}
      {page < 4 ? (
        <Link to="#" onClick={nextPage}>
          Next
        </Link>
      ) : null}
    </div>
  );
}

import React, { useContext } from "react";
import Context from "../../../../context/context";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ButtonForm() {
  const context = useContext(Context);
  const page = context.pageForm;
const {t}= useTranslation()
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
        <Link to="#" className="btn btn-warning" onClick={backPage}>
          {t('Back')}
        </Link>
      ) : (
        <Link to="#" className="btn btn-done disabled-back" onClick={backPage}>
          {t('Back')}
        </Link>
      )}
      {page < 4 ? (
        <Link to="#" className="btn btn-success" onClick={nextPage}>
          {t('Next')}
        </Link>
      ) : null}
    </div>
  );
}

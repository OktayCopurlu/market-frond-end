import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import citiesJson from "../../../../context/city.json"; //import canton and city information
import ProductContext from "../../../../context/productContext";
import "../../../../moduls/product/listProduct/main/productList.css";

export default function CantonLinks() {
  const [openList, setOpenList] = useState(false);
  const productContext = useContext(ProductContext);

  const cantonArray = [];
  for (let index = 0; index < citiesJson.length; index++) {
    const element = citiesJson[index].canton.NAME;
    if (!cantonArray.includes(element)) {
      cantonArray.push(element);
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    productContext.cantonHandler(event.target.id);

    if (!openList) {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  }

  return (
    <div
      className="border-top border-dark m-2 accordion accordion-flush"
      id="Canton"
    >
      <div className="filter-canton-container mt-3 d-flex justify-content-between accordion-item">
        <Link 
          to="/ProductList"
          className="ml-1 mb-2 filter-canton-link h5 accordion-button collapsed"
          data-toggle="collapse"
          data-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
          onClick={() => (!openList ? setOpenList(true) : setOpenList(false))}
        >
          Choose Canton
        </Link>

        <Link
          to="/ProductList"
          data-toggle="collapse"
          data-target="#flush-collapseTwo"
          aria-expanded="false"
          aria-controls="flush-collapseTwo"
          className="filter-canton-link mb-2 h5 accordion-button collapsed"
          onClick={() => (!openList ? setOpenList(true) : setOpenList(false))}
        >
          {!openList ? (
            <i className="fas fa-angle-down"></i>
          ) : (
            <i className="fas fa-angle-up"></i>
          )}
        </Link>
      </div>

      <div
        aria-labelledby="flush-headingOne"
        data-parent="#Canton"
        className="row ml-1 mb-3 accordion-collapse collapse"
        id="flush-collapseTwo"
      >
        {cantonArray.sort().map((canton, index) => {
          return (
            <>
              {canton === productContext.canton ? (
                <Link
                  key={index}
                  to="/ProductList"
                  className="accordion-body filter-canton-link text-danger text-uppercase font-weight-bold col-6"
                  onClick={() => productContext.cantonHandler(null)}
                >
                  {canton}
                </Link>
              ) : (
                <Link
                  to="/ProductList"
                  className="accordion-body filter-canton-link mb-1 col-6"
                  onClick={onSubmit}
                  id={canton}
                  key={index}
                >
                  {canton}
                </Link>
              )}
            </>
          );
        })}
      </div>
    </div>

  );
}

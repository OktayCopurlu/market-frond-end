import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../../../../context/productContext";
import "../../../../moduls/product/listProduct/main/productList.css";

export default function CategoryLinks() {
  const [openList, setOpenList] = useState(false);
  const productContext = useContext(ProductContext);

  function onSubmit(event) {
    event.preventDefault();
    productContext.mainCategoryHandler(event.target.id);

    if (!openList) {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  }

  return (

    <div className="border-top border-dark  m-2 accordion accordion-flush"  id="accordionFlushExample">
    <div className="filter-canton-container mt-3  d-flex justify-content-between accordion-item">
      <Link to="/ProductList"
       data-toggle="collapse"
       data-target="#flush-collapseOne"
       aria-expanded="false"
       aria-controls="flush-collapseOne"
        className="ml-1 mb-2 filter-canton-link h5  accordion-button collapsed"
        onClick={() => (!openList ? setOpenList(true) : setOpenList(false))}
      >
        Choose Category
      </Link>

      <Link to="/ProductList"
       data-toggle="collapse"
       data-target="#flush-collapseOne"
       aria-expanded="false"
       aria-controls="flush-collapseOne"
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

    <div    aria-labelledby="flush-headingOne"
        data-parent="#accordionFlushExample"
        className="row ml-1 mb-3 accordion-collapse collapse"
        id="flush-collapseOne">
  
          {productContext.mainCategory === "Clothes" ? (
            <Link to="/ProductList"
              className="filter-canton-link accordion-body  text-danger text-uppercase font-weight-bold mb-1 col-6"
              onClick={() => productContext.mainCategoryHandler(null)}
              id="Clothes"
            >
              Clothes
            </Link>
          ) : (
            <Link to="/ProductList"
              className="filter-canton-link accordion-body  mb-1 col-6"
              onClick={onSubmit}
              id="Clothes"
            >
              Clothes
            </Link>
          )}
          {productContext.mainCategory === "Hausehold" ? (
            <Link to="/ProductList"
              className="filter-canton-link accordion-body  text-danger text-uppercase font-weight-bold mb-1 col-6"
              onClick={() => productContext.mainCategoryHandler(null)}
              id="Hausehold"
            >
              Hausehold
            </Link>
          ) : (
            <Link to="/ProductList"
              className="filter-canton-link accordion-body  mb-1 col-6"
              onClick={onSubmit}
              id="Hausehold"
            >
              Hausehold
            </Link>
          )}
          {productContext.mainCategory === "Electronic" ? (
            <Link to="/ProductList"
              className="filter-canton-link accordion-body  text-danger text-uppercase font-weight-bold mb-1 col-6"
              onClick={() => productContext.mainCategoryHandler(null)}
              id="Electronic"
            >
              Electronic
            </Link>
          ) : (
            <Link to="/ProductList"
              className="filter-canton-link accordion-body  mb-1 col-6"
              onClick={onSubmit}
              id="Electronic"
            >
              Electronic
            </Link>
          )}
          {productContext.mainCategory === "Toys" ? (
            <Link to="/ProductList"
              className="filter-canton-link text-danger accordion-body  text-uppercase font-weight-bold mb-1 col-6"
              onClick={() => productContext.mainCategoryHandler(null)}
              id="Toys"
            >
              Toys
            </Link>
          ) : (
            <Link to="/ProductList"
              className="filter-canton-link accordion-body  mb-1 col-6"
              onClick={onSubmit}
              id="Toys"
            >
              Toys
            </Link>
          )}
          {productContext.mainCategory === "Others" ? (
            <Link to="/ProductList"
              className="filter-canton-link accordion-body  text-danger text-uppercase font-weight-bold mb-1 col-6"
              onClick={() => productContext.mainCategoryHandler(null)}
              id="Others"
            >
              Others
            </Link>
          ) : (
            <Link to="/ProductList"
              className="filter-canton-link accordion-body  mb-1 col-6"
              onClick={onSubmit}
              id="Others"
            >
              Others
            </Link>
          )}
        
   
    </div>
  </div>



















    // <div className="border-top border-dark  m-2">
    //   <div className="filter-canton-container mt-3  d-flex justify-content-between">
    //     <Link to="/ProductList"
    //       className="ml-1 mb-2 filter-canton-link h5"
    //       onClick={() => (!openList ? setOpenList(true) : setOpenList(false))}
    //     >
    //       Choose Category
    //     </Link>

    //     <Link to="/ProductList"
    //       className="filter-canton-link mb-2 h5"
    //       onClick={() => (!openList ? setOpenList(true) : setOpenList(false))}
    //     >
    //       {!openList ? (
    //         <i className="fas fa-angle-down"></i>
    //       ) : (
    //         <i className="fas fa-angle-up"></i>
    //       )}
    //     </Link>
    //   </div>

    //   <div className="row ml-1 mb-3">
    //     {openList ? (
    //       <>
    //         {productContext.mainCategory === "Clothes" ? (
    //           <Link to="/ProductList"
    //             className="filter-canton-link text-danger text-uppercase font-weight-bold mb-1 col-6"
    //             onClick={() => productContext.mainCategoryHandler(null)}
    //             id="Clothes"
    //           >
    //             Clothes
    //           </Link>
    //         ) : (
    //           <Link to="/ProductList"
    //             className="filter-canton-link  mb-1 col-6"
    //             onClick={onSubmit}
    //             id="Clothes"
    //           >
    //             Clothes
    //           </Link>
    //         )}
    //         {productContext.mainCategory === "Hausehold" ? (
    //           <Link to="/ProductList"
    //             className="filter-canton-link text-danger text-uppercase font-weight-bold mb-1 col-6"
    //             onClick={() => productContext.mainCategoryHandler(null)}
    //             id="Hausehold"
    //           >
    //             Hausehold
    //           </Link>
    //         ) : (
    //           <Link to="/ProductList"
    //             className="filter-canton-link  mb-1 col-6"
    //             onClick={onSubmit}
    //             id="Hausehold"
    //           >
    //             Hausehold
    //           </Link>
    //         )}
    //         {productContext.mainCategory === "Electronic" ? (
    //           <Link to="/ProductList"
    //             className="filter-canton-link text-danger text-uppercase font-weight-bold mb-1 col-6"
    //             onClick={() => productContext.mainCategoryHandler(null)}
    //             id="Electronic"
    //           >
    //             Electronic
    //           </Link>
    //         ) : (
    //           <Link to="/ProductList"
    //             className="filter-canton-link  mb-1 col-6"
    //             onClick={onSubmit}
    //             id="Electronic"
    //           >
    //             Electronic
    //           </Link>
    //         )}
    //         {productContext.mainCategory === "Toys" ? (
    //           <Link to="/ProductList"
    //             className="filter-canton-link text-danger text-uppercase font-weight-bold mb-1 col-6"
    //             onClick={() => productContext.mainCategoryHandler(null)}
    //             id="Toys"
    //           >
    //             Toys
    //           </Link>
    //         ) : (
    //           <Link to="/ProductList"
    //             className="filter-canton-link  mb-1 col-6"
    //             onClick={onSubmit}
    //             id="Toys"
    //           >
    //             Toys
    //           </Link>
    //         )}
    //         {productContext.mainCategory === "Others" ? (
    //           <Link to="/ProductList"
    //             className="filter-canton-link  text-danger text-uppercase font-weight-bold mb-1 col-6"
    //             onClick={() => productContext.mainCategoryHandler(null)}
    //             id="Others"
    //           >
    //             Others
    //           </Link>
    //         ) : (
    //           <Link to="/ProductList"
    //             className="filter-canton-link  mb-1 col-6"
    //             onClick={onSubmit}
    //             id="Others"
    //           >
    //             Others
    //           </Link>
    //         )}
    //       </>
    //     ) : null}
    //   </div>
    // </div>
  );
}

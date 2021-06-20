import React from "react";

export default function BoxesInAuth() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md text-center mb-2">
          <a href="/create" className="boxes donate-box bg-primary">{null}</a>
          <h5 className="d-flex justify-content-center">DONATE ITEMS</h5>
        </div>
        <div className="col-md mb-2">
          <a href="/productList" className="boxes find-box bg-danger">{null}</a>
          <h5 className="d-flex justify-content-center">FIND ITEMS</h5>
        </div>

        <div className="col-md mb-2">
          <a href="/wishForm" className="boxes wish-box bg-info">{null}</a>
          <h5 className="d-flex justify-content-center">WISH ITEMS</h5>
        </div>
      </div>
    </div>
  );
}

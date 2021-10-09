import React, { useState, useContext, useEffect } from "react";
import Context from "../../../context/context";
import ProductContext from "../../../context/productContext";
import "./reactStepBar.css";
export default function ReactStepBar() {
  const [style, setStyle] = useState({});
  const context = useContext(Context);
  const productContext = useContext(ProductContext);
  const page = context.pageForm;
  const persent = productContext.pictureUploaded
    ? 100
    : page === 1
    ? 0
    : page === 2
    ? 25
    : page === 3
    ? 50
    : page === 4
    ? 75
    : 0;
  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${persent}%`,
    };
    setStyle(newStyle);
  }, [persent, productContext.pictureUploaded]);
  return (
    <div className="d-flex justify-content-center">
      <div className="progress">
        <div className="progress-done" style={style}>
          {persent}%
        </div>
      </div>
    </div>
  );
}

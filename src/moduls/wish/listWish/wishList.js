import React, { useState, useEffect, useContext } from "react";
import "./wishList.css";
import * as wishAction from "../../../services/wishes-service";
import Card from "./card";
import SearchButton from "../../../components/search/searchButton";
import ProductContext from "../../../context/productContext";
export default function WishList() {
  const productContext = useContext(ProductContext);
  const searchItem = productContext.search;
  const [state, setState] = useState([]);

  async function showWishList() {
    const list = await wishAction.getAll();
    return await setState(list);
  }
  useEffect(() => {
    showWishList();
  }, []);

  return (
    <div className="wishContainer">
      <div className="wishList">
        {state ? state.length === 0 ? (
          <h3 key="header">There is no wish</h3>
        ) : (
          <>
            <h2 className="d-flex justify-content-center mb-3">Wish List</h2>
            <SearchButton />
            <div className="d-flex justify-content-around row">
            <Card element={{ state, searchItem }} /></div>
          </>
        ):<h3 className="m-5">Loading...</h3>}
      </div>
    </div>
  );
}

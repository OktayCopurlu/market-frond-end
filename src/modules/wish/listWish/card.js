import React, { useEffect, useState } from "react";
import WishCard from "../../../components/cards/wishCards";

export default function Card(props) {
  const { state, searchItem } = props.element;
  const [filteredWishes, setFilteredWishes] = useState([]);
  useEffect(() => {
    let wishes = state.filter((element) => {
      if (
        element.title.toLowerCase().includes(searchItem.toLocaleLowerCase())
      ) {
        return element;
      } else if (
        element.canton.toLowerCase().includes(searchItem.toLocaleLowerCase())
      ) {
        return element;
      } else if (
        element.detail.toLowerCase().includes(searchItem.toLocaleLowerCase())
      ) {
        return element;
      }
      return null;
    });
    setFilteredWishes(wishes);
  }, [searchItem, state]);

  return (
    filteredWishes.length > 0 ? (
        filteredWishes.map((element, index) => {
          return <WishCard element={{ element, index }} key={index} />;
        })
      ) : (
        <div className="d-flex justify-content-center w-100">
          <h3>
            <strong className="text-danger">{searchItem} </strong>Couldn't find{" "}
          </h3>
        </div>
      )
  );
}

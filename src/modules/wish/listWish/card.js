import React from "react";
import WishCard from "../../../components/cards/wishCards";

export default function Card(props) {
  const { state, searchItem } = props.element;

  return (
    <>
      {state
        .filter((element) => {
          if (
            element.title.toLowerCase().includes(searchItem.toLocaleLowerCase())
          ) {
            return element;
          } else if (
            element.canton
              .toLowerCase()
              .includes(searchItem.toLocaleLowerCase())
          ) {
            return element;
          } else if (
            element.detail
              .toLowerCase()
              .includes(searchItem.toLocaleLowerCase())
          ) {
            return element;
          }
          return null;
        })
        .map((element, index) => {
          return <WishCard element={{ element, index }} key={index} />;
        })}
    </>
  );
}

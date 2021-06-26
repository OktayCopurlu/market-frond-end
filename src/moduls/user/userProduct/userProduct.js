import React, { useState, useEffect, useContext } from "react";
import "../userPage/personalPage.css";
import * as wishActions from "../../../services/wishes-service";
import * as productActions from "../../../services/products-service";
import { useAuth0 } from "@auth0/auth0-react";
import UserProductCard from "./userProductCard";
import UserWishCard from "./userWishCard";
import productContext from "../../../context/productContext";

export default function UserProduct() {
  const [products, setProducts] = useState([]);
  const productsContext = useContext(productContext);
  const [wishes, setWishes] = useState([]);
  const { user } = useAuth0();
  
  useEffect(() => {
    productsContext.productIdHandler(products);
    productsContext.wishIdHandler(wishes);
    
    async function showList() {
      try {
        const userId = await user.sub;
        const product = await productActions.filterUserProducts(userId);
        const wishes = await wishActions.filterUserWishes(userId);
        await setProducts(product);
        await setWishes(wishes);
      } catch (error) {
        console.log(error);
      }
    }
    showList();
    // eslint-disable-next-line
  }, [user]);

  return (
    <div className="d-flex justify-content-center row m-0 p-1">
      <UserProductCard products={products} />
      <UserWishCard wishes={wishes} />
    </div>
  );
}

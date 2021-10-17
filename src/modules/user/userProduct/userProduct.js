import React, { useState, useEffect, useContext } from "react";
import "../userPage/personalPage.css";
import * as productActions from "../../../services/products-service";
import { useAuth0 } from "@auth0/auth0-react";
import UserProductCard from "./userProductCard";
import productContext from "../../../context/productContext";
import { useTranslation } from "react-i18next";

export default function UserProduct() {
  const [products, setProducts] = useState([]);
  const productsContext = useContext(productContext);
  const { user } = useAuth0();
  const { t } = useTranslation();
  useEffect(() => {
    productsContext.productIdHandler(products);

    async function showList() {
      try {
        const userId = user.sub;
        const product = await productActions.filterUserProducts(userId);
        setProducts(product);
      } catch (error) {
        console.log(error);
      }
    }
    showList();
    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      <h3 className="d-flex justify-content-center p-0 m-3">
        {t("MyProductList")}
      </h3>
      {products.length > 0 ? (
        <div className="d-flex justify-content-center user-product-container row m-0 p-1">
          <UserProductCard products={products} />
        </div>
      ) : (
        <h3 className="d-flex justify-content-center p-0">
          {t("YouDontHaveProductYet")}
        </h3>
      )}
    </>
  );
}

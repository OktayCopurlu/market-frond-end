import React, { useState, useContext, useEffect } from "react";
import Context from "../../../context/context";
import ProductContext from "../../../context/productContext";
import EditProduct from "../../product/editProduct/editProduct";
import EditWish from "../../wish/editWish/editWish";
import * as productActions from "../../../services/products-service";
import * as wishActions from "../../../services/wishes-service";

export default function EditProductOrWish() {
  const editContext = useContext(Context);
  const productContext = useContext(ProductContext);

  const productId = editContext.productId;
  const [products, setProducts] = useState({});
  const [wish, setWish] = useState({});

  useEffect(() => {
    async function showList() {
      const product = await productActions.filterAndGet(productId);
      const wish = await wishActions.filterAndGet(productId);

      if (product) {
        productContext.productHandler(product)
        return setProducts(product);
      }
      if (wish) {
        return setWish(wish);
      }
    }

    showList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {products._id === productId ? <EditProduct products={products} /> : null}
      {wish._id === productId ? <EditWish wish={wish} /> : null}
    </div>
  );
}

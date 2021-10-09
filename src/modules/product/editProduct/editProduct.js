import React, { useState, useContext, useEffect } from "react";
import Context from "../../../context/context";
import ProductContext from "../../../context/productContext";
import { useAuth0 } from "@auth0/auth0-react";
import EditProductCard from "./editProductPage";
import { useTranslation } from "react-i18next";
export default function EditProduct(props) {
  const { t } = useTranslation();
  const { getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState();
  getAccessTokenSilently().then((token) => setToken(token));
  const context = useContext(Context);
  const handlerSuccess = context.handlerSuccess;
  const productContext = useContext(ProductContext);
  const products = props.products;
  const productId = products._id;
  const photosProduct = products.photos;
  const [canton, setCanton] = useState(products.canton);
  const [city, setCity] = useState(products.city);
  const [mainCategory, setMainCategory] = useState(products.mainCategory);
  const [photos, setPhotos] = useState(photosProduct);
  const [condition, setCondition] = useState(products.condition);
  const [title, setTitle] = useState(products.title);
  const [size, setSize] = useState(products.size);
  const [detail, setDetail] = useState(products.detail);
  const [contactTel, setContactTel] = useState(products.contactTel);
  const [contactEmail, setContactEmail] = useState(products.contactEmail);
  const [dimensions, setDimensions] = useState(products.dimensions);
  const [categoryClothes, setCategoryClothes] = useState(
    products.categoryClothes
  );

  useEffect(() => {
    if (productContext.information) {
      setDetail(productContext.information);
    }
    if (productContext.canton) {
      setCanton(productContext.canton);
    }
    if (productContext.city) {
      setCity(productContext.city);
    }
    if (productContext.categoryClothes) {
      setCategoryClothes(productContext.categoryClothes);
    }
    if (productContext.mainCategory) {
      setMainCategory(productContext.mainCategory);
    }
    if (productContext.photos.length > 0) {
      setPhotos(productContext.photos);
    }
    if (productContext.condition) {
      setCondition(productContext.condition);
    }
    if (productContext.title) {
      setTitle(productContext.title);
    }
    if (productContext.size) {
      setSize(productContext.size);
    }
    if (productContext.dimensions) {
      setDimensions(productContext.dimensions);
    }
    if (productContext.contactTel) {
      setContactTel(productContext.contactTel);
    }
    if (productContext.contactEmail) {
      setContactEmail(productContext.contactEmail);
    }
    // eslint-disable-next-line
  }, [
    productContext.information,
    productContext.canton,
    productContext.categoryClothes,
    productContext.city,
    productContext.condition,
    productContext.contactEmail,
    productContext.contactTel,
    productContext.dimensions,
    productContext.mainCategory,
    productContext.photos.length,
    productContext.size,
    productContext.title,
  ]);

  const body = {
    canton,
    mainCategory,
    dimensions,
    city,
    categoryClothes,
    condition,
    title,
    size,
    detail,
    contactTel,
    photos,
    contactEmail,
  };
  //----------------------------------------------------------------

  return (
    <>
      <h3>{t("EditProduct")}</h3>
      <div className="row">
        <EditProductCard
          elements={{ productId, body, handlerSuccess, token, products }}
        />
      </div>
    </>
  );
}

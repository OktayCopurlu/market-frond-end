import React, { useState } from "react";

const ProductContext = React.createContext({
  state: [],
  search: "",
  categoryClothes: "",
  mainCategory: "",
  city: "",
  canton: "",
  photo: [],
  condition: "",
  dimensions: "",
  size: "",
  title: "",
  contactTel: "",
  information: "",
  wishId: "",
  contactEmail: "",
  product: [],
  productHandler: function (props) {},
  contactEmailHandler: function (props) {},
  wishIdHandler: function (props) {},
  stateHandler: function (props) {},
  searchHandler: function (props) {},
  informationHandler: function (props) {},
  contactTelHandler: function (props) {},
  titleHandler: function (props) {},
  sizeHandler: function (props) {},
  dimensionsHandler: function (props) {},
  conditionHandler: function (props) {},
  photosHandler: function (props) {},
  categoryClothesHandler: function (props) {},
  mainCategoryHandler: function (props) {},
  cityHandler: function (props) {},
  cantonHandler: function (props) {},
  productIdHandler: function (id) {},
});

export const ProductContextProvider = (props) => {
  const [productId, setProductId] = useState(null);
  const [canton, setCanton] = useState(null);
  const [city, setCity] = useState(null);
  const [categoryClothes, setCategoryClothes] = useState(null);
  const [mainCategory, setMainCategory] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [condition, setCondition] = useState(null);
  const [title, setTitle] = useState(null);
  const [size, setSize] = useState(null);
  const [dimensions, setDimensions] = useState(null);
  const [information, setInformation] = useState(null);
  const [contactTel, setContactTel] = useState(null);
  const [search, setSearch] = useState("");
  const [state, setState] = useState([]);
  const [wishId, setWishId] = useState();
  const [contactEmail, setContactEmail] = useState(null);
  const [product, setProduct] = useState([null]);

  const productHandler = (props) => {
    setProduct(props);
  };
  const contactEmailHandler = (props) => {
    setContactEmail(props);
  };

  const wishIdHandler = (id) => {
    setWishId(id);
  };

  const stateHandler = (props) => {
    setState(props);
  };
  const searchHandler = (props) => {
    setSearch(props);
  };

  const conditionHandler = (props) => {
    setCondition(props);
  };
  const photosHandler = (props) => {
    setPhotos(props);
  };

  const categoryClothesHandler = (props) => {
    setCategoryClothes(props);
  };
  const mainCategoryHandler = (props) => {
    setMainCategory(props);
  };
  const cantonHandler = (props) => {
    setCanton(props);
  };
  const cityHandler = (props) => {
    setCity(props);
  };

  const productIdHandler = (id) => {
    setProductId(id);
  };

  const dimensionsHandler = (props) => {
    setDimensions(props);
  };
  const sizeHandler = (props) => {
    setSize(props);
  };
  const titleHandler = (props) => {
    setTitle(props);
  };
  const contactTelHandler = (props) => {
    setContactTel(props);
  };
  const informationHandler = (props) => {
    setInformation(props);
  };
  const contextValue = {
    wishId: wishId,
    state: state,
    search: search,
    categoryClothes: categoryClothes,
    mainCategory: mainCategory,
    city: city,
    canton: canton,
    productId: productId,
    photos: photos,
    condition: condition,
    title: title,
    size: size,
    dimensions: dimensions,
    information: information,
    contactTel: contactTel,
    contactEmail: contactEmail,
    product: product,
    productHandler: productHandler,
    contactEmailHandler: contactEmailHandler,
    wishIdHandler: wishIdHandler,
    stateHandler: stateHandler,
    searchHandler: searchHandler,
    dimensionsHandler: dimensionsHandler,
    sizeHandler: sizeHandler,
    titleHandler: titleHandler,
    contactTelHandler: contactTelHandler,
    informationHandler: informationHandler,
    conditionHandler: conditionHandler,
    photosHandler: photosHandler,
    categoryClothesHandler: categoryClothesHandler,
    mainCategoryHandler: mainCategoryHandler,
    cityHandler: cityHandler,
    cantonHandler: cantonHandler,
    productIdHandler: productIdHandler,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;

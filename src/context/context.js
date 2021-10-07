import React, { useState } from "react";

const Context = React.createContext({
  navbarOpen: null,
  detail: "",
  address: "",
  birthDate: "",
  job: "",
  phone: "",
  city: "",
  canton: "",
  isLoggedIn: null,
  isSuccess: null,
  state: [],
  userId: "",
  name: "",
  photo: null,
  userMetaData: {},
  pageForm: null,
  closedModal: null,
  facebook: null,
  twitter: null,
  instagram: null,
  facebookHandler: function (props) {},
  twitterHandler: function (props) {},
  instagramHandler: function (props) {},
  clasedModalHandler: function (props) {},
  pageFormHandler: function (props) {},
  navbarOpenHandler: function (props) {},
  userMetaDataHandler: function (props) {},
  photoHandler: function (props) {},
  detailHandler: function (props) {},
  addressHandler: function (props) {},
  birthDateHandler: function (props) {},
  jobHandler: function (props) {},
  phoneHandler: function (props) {},
  cityHandler: function (props) {},
  cantonHandler: function (props) {},
  nameHandler: function (props) {},
  userIdHandler: function (props) {},
  stateHandler: function (props) {},
  handlerSuccess: function (props) {},
  product: function (id) {},
});

export const ContextProvider = (props) => {
  const [productId, setProductId] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [state, setState] = useState([]);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);
  const [canton, setCanton] = useState(null);
  const [city, setCity] = useState(null);
  const [address, setaddress] = useState(null);
  const [detail, setDetail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [job, setJob] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [userMetaData, setUserMetaData] = useState({});
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [pageForm, setPageForm] = useState(1);
  const [closedModal, setClosedModal] = useState(false);
  const [twitter, setTwitter] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [instagram, setInstagram] = useState(null);

  const facebookHandler = (props) => {
    setFacebook(props);
  };
  const twitterHandler = (props) => {
    setTwitter(props);
  };
  const instagramHandler = (props) => {
    setInstagram(props);
  };
  const closedModalHandler = (props) => {
    setClosedModal(props);
  };
  const pageFormHandler = (props) => {
    setPageForm(props);
  };
  const navbarOpenHandler = (props) => {
    setNavbarOpen(props);
  };
  const userMetaDataHandler = (props) => {
    setUserMetaData(props);
  };

  const photoHandler = (props) => {
    setPhoto(props);
  };
  const jobHandler = (props) => {
    setJob(props);
  };
  const birthDateHandler = (props) => {
    setBirthDate(props);
  };
  const phoneHandler = (props) => {
    setPhone(props);
  };
  const detailHandler = (props) => {
    setDetail(props);
  };
  const addressHandler = (props) => {
    setaddress(props);
  };

  const cantonHandler = (props) => {
    setCanton(props);
  };
  const cityHandler = (props) => {
    setCity(props);
  };

  const nameHandler = (props) => {
    setName(props);
  };
  const handlerSuccess = (props) => {
    setIsSuccess(props);
  };

  const productIdHandler = (id) => {
    setProductId(id);
  };

  const stateHandler = (props) => {
    setState(props);
  };
  const userIdHandler = (props) => {
    setUserId(props);
  };
  const contextValue = {
    pageForm: pageForm,
    detail: detail,
    address: address,
    birthDate: birthDate,
    job: job,
    phone: phone,
    city: city,
    canton: canton,
    name: name,
    productId: productId,
    isSuccess: isSuccess,
    state: state,
    userId: userId,
    photo: photo,
    userMetaData: userMetaData,
    navbarOpen: navbarOpen,
    closedModal: closedModal,
    facebook: facebook,
    twitter: twitter,
    instagram: instagram,
    facebookHandler: facebookHandler,
    twitterHandler: twitterHandler,
    instagramHandler: instagramHandler,
    closedModalHandler: closedModalHandler,
    pageFormHandler: pageFormHandler,
    navbarOpenHandler: navbarOpenHandler,
    userMetaDataHandler: userMetaDataHandler,
    photoHandler: photoHandler,
    birthDateHandler: birthDateHandler,
    phoneHandler: phoneHandler,
    detailHandler: detailHandler,
    addressHandler: addressHandler,
    jobHandler: jobHandler,
    cityHandler: cityHandler,
    cantonHandler: cantonHandler,
    nameHandler: nameHandler,
    userIdHandler: userIdHandler,
    stateHandler: stateHandler,
    handlerSuccess: handlerSuccess,
    product: productIdHandler,
  };

  return (
    <Context.Provider value={contextValue}> {props.children} </Context.Provider>
  );
};

export default Context;

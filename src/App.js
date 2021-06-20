import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Route, Switch } from "react-router-dom";

import Navigation from "./moduls/navigation/navigation";
import ProductList from "./moduls/product/listProduct/main/productList";
import WishList from "./moduls/wish/listWish/wishList";
import FreeMarket from "./moduls/home/freeMarket";
import CreateProducts from "./moduls/product/createProduct/createProducts";
import CreateWishList from "./moduls/wish/createWish/createWish";
import PersonalPage from "./moduls/user/userPage/personalPage";

import Footer from "./moduls/footer/footer";
import ProtectedRoute from "./auth/protected-route";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/productList">
          <ProductList />
        </Route>
        <Route exact path="/">
          <FreeMarket />
        </Route>
        <Route path="/wishList">
          <WishList />
        </Route>

        <Fragment>
          <ProtectedRoute path="/create" component={CreateProducts} />
          <ProtectedRoute path="/wishForm" component={CreateWishList} />
          <ProtectedRoute path="/personalPage" component={PersonalPage} />
        </Fragment>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

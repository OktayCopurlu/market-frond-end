import React from "react";
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
import EmailForm from "./moduls/footer/emailForm";
import Footer from "./moduls/footer/footer";
import History from "./moduls/footer/history";
import ProtectedRoute from "./provider/protected-route";
import UserProduct from "./moduls/user/userProduct/userProduct";
import UserWish from "./moduls/user/userProduct/userWish";
// import MainModal from "./moduls/user/editUser/mainModal";
import NavbarModal from "./moduls/user/editUser/navbarModal";

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
        <Route path="/email">
          <EmailForm />
        </Route>

        <Route path="/history">
          <History />
        </Route>
        <ProtectedRoute path="/create" component={CreateProducts} />
        <ProtectedRoute path="/wishForm" component={CreateWishList} />
        <ProtectedRoute path="/personalPage" component={PersonalPage} />
        <ProtectedRoute path="/my-products" component={UserProduct} />
        <ProtectedRoute path="/my-wishes" component={UserWish} />
        <ProtectedRoute path="/edit-my-detail" component={NavbarModal} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

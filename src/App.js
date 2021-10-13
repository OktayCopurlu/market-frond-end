import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch,Route } from "react-router-dom";
import Navigation from "./modules/navigation/navigation";
import ProductList from "./modules/product/listProduct/main/productList";
import WishList from "./modules/wish/listWish/wishList";
import FreeMarket from "./modules/home/freeMarket";
import CreateProducts from "./modules/product/createProduct/createProducts";
import CreateWishList from "./modules/wish/createWish/createWish";
import PersonalPage from "./modules/user/userPage/personalPage";
import EmailForm from "./modules/footer/emailForm";
import Footer from "./modules/footer/footer";
import History from "./modules/footer/history";
import ProtectedRoute from "./provider/protected-route";
import UserProduct from "./modules/user/userProduct/userProduct";
import UserWish from "./modules/user/userProduct/userWish";
import NavbarModal from "./modules/user/editUser/navbarModal";
import Explanation from "./modules/product/createProduct/explanation";
import ExplanationWish from "./modules/wish/createWish/explanationWish";
import NotFound from "./modules/notFound/notFound";

function App() {
  return (
    <>
      <Navigation />
      <Switch >
        <Route exact path="/">
          <FreeMarket />
        </Route>
        <Route path="/productList">
          <ProductList />
        </Route>
        <Route path="/wishList">
          <WishList />
        </Route>
        <Route path="/email">
          <EmailForm />
        </Route>
        <Route path="/explanation">
          <Explanation/>
        </Route>
        <Route path="/explanation-wish">
          <ExplanationWish />
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
        <Route path="*">
            <NotFound />
          </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

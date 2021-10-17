import { confirmAlert } from "react-confirm-alert";
import * as productActions from "../../../services/products-service";
import * as wishActions from "../../../services/wishes-service";
import * as userAction from "../../../services/users-service";

export function confirmAlertDelete(user, productsContext, logout) {
  const accessToken = process.env.REACT_APP_AUTH0_MNGT_TOKEN;
  const userId = user.sub;
  const productId = productsContext.productId;
  const wishId = productsContext.wishId;

  confirmAlert({
    title: "Are you sure?",
    message: "if you delete your account you can not bring it back again",
    buttons: [
      {
        label: "Delete",
        onClick: () => {
          userAction
            .deleteUser(userId, accessToken)
            .then(() => {
              productId?.map((id) =>
                productActions.deleteProducts(id._id, accessToken)
              );
              wishId?.map((id) =>
                wishActions.deleteWishes(id._id, accessToken)
              );
            })
            .then(() =>
              logout({
                returnTo: window.location.origin,
              })
            );
            alert("Account was deleted.")
        },
      },
      {
        label: "No",
        onClick: () => alert("Account was not deleted."),
      },
    ],
  });
}

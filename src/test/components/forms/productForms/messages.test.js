import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import NotSuccessText from "../../../../components/forms/productForms/messages/notSuccessText";
import SuccessText from "../../../../components/forms/productForms/messages/successText";

describe("Forms", () => {
  test("NotSuccessText message is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <NotSuccessText />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("text-center"));
    } catch (error) {
      console.log(error);
    }
  });
  test("SuccessText message is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <SuccessText />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("text-center"));
    } catch (error) {
      console.log(error);
    }
  });
});

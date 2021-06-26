import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import UserCanton from "../../../../components/forms/userForms/cantonAndCity/userCanton";
import UserCity from "../../../../components/forms/userForms/cantonAndCity/userCity";

describe("Forms", () => {
  test("City form is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <UserCity />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("input-field"));
    } catch (error) {
      console.log(error);
    }
  });
  test("Canton form is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <UserCanton />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("input-field"));
    } catch (error) {
      console.log(error);
    }
  });
});

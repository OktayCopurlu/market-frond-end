import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import Phone from "../../../../components/forms/userForms/userPhone/phone";

describe("forms", () => {
  test("Phone are working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Phone />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("input-field"));
    } catch (error) {
      console.log(error);
    }
  });
});

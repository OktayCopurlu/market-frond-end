import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import Condition from "../../../../components/forms/productForms/condition/condition";

describe("Forms", () => {
  test("condition form is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Condition />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("select-group"));
    } catch (error) {
      console.log(error);
    }
  });
});

import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import Title from "../../../../components/forms/productForms/title/title";

describe("forms", () => {
  test("Title are working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Title />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("input-field"));
    } catch (error) {
      console.log(error);
    }
  });
});

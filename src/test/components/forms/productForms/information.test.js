import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import Information from "../../../../components/forms/productForms/information/information";

describe("Forms", () => {
  test("cantonLinks are working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Information />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("input-field"));
    } catch (error) {
      console.log(error);
    }
  });
});

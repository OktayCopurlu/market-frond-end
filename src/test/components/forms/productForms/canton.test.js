import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import Canton from "../../../../components/forms/productForms/cantonAndCity/canton";

describe("Forms", () => {
  test("canton card is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Canton />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("select-group"));
    } catch (error) {
      console.log(error);
    }
  });
});

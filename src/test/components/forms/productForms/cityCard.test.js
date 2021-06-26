import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import City from '../../../../components/forms/productForms/cantonAndCity/city'

describe("product Page", () => {
  test("city list are working", async () => {
    try {
      const { container } = await render(
        <Route>
          <City />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("accordion-flush"));
    } catch (error) {
      console.log(error);
    }
  });
});

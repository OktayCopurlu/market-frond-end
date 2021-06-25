import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import CategoryLinks from "../../../../components/forms/productForms/categoryLinkList/categoryLinks";

describe("Forms", () => {
  test("categoryLinks are working", async () => {
    try {
      const { container } = await render(
        <Route>
          <CategoryLinks />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("accordion-flush"));
    } catch (error) {
      console.log(error);
    }
  });
});

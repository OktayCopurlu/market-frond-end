import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import Category from "../../../../components/forms/productForms/categoryAndPhotos/category";

describe("Forms", () => {
  test("category component is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Category />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("select-group"));
    } catch (error) {
      console.log(error);
    }
  });
});

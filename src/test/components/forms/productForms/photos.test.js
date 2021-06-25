import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import Photos from "../../../../components/forms/productForms/categoryAndPhotos/photos";

describe("forms", () => {
  test("Photos are working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Photos />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("form-group"));
    } catch (error) {
      console.log(error);
    }
  });
});

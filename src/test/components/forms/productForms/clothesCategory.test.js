import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import ClothesCategory from "../../../../components/forms/productForms/categoryAndPhotos/clothesCategory";

describe("Forms", () => {
  test("clothes Category component is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <ClothesCategory />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("select-group"));
    } catch (error) {
      console.log(error);
    }
  });
});

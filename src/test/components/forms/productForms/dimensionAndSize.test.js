import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import Size from "../../../../components/forms/productForms/sizeAndDimensions/size";
import Dimensions from "../../../../components/forms/productForms/sizeAndDimensions/dimensions";

describe("Forms", () => {
  test("size form is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Size />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("input-field"));
    } catch (error) {
      console.log(error);
    }
  });
  test("dimension from is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Dimensions />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("input-field"));
    } catch (error) {
      console.log(error);
    }
  });
});

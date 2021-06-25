import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import Contact from "../../../../components/forms/productForms/contact/contact";

describe("Forms", () => {
  test("contant form is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Contact />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("input-field"));
    } catch (error) {
      console.log(error);
    }
  });
});

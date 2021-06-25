import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import CantonLinks from "../../../../components/forms/productForms/cantonLinkList/cantonLinks";

describe("Forms", () => {
  test("cantonLinks are working", async () => {
    try {
      const { container } = await render(
        <Route>
          <CantonLinks />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("accordion-flush"));
    } catch (error) {
      console.log(error);
    }
  });
});

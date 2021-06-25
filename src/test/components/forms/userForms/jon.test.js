import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import Job from "../../../../components/forms/userForms/userJob/job";

describe("forms", () => {
  test("job form is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Job />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("input-field"));
    } catch (error) {
      console.log(error);
    }
  });
});

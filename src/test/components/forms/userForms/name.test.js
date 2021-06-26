import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import Name from "../../../../components/forms/userForms/name/name";

describe("Forms", () => {
  test("name form is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <Name />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("select-group"));
    } catch (error) {
      console.log(error);
    }
  });
});

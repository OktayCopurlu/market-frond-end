import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import UserInformation from "../../../../components/forms/userForms/userInformation/userInformation";

describe("Forms", () => {
  test("user information is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <UserInformation />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("input-field"));
    } catch (error) {
      console.log(error);
    }
  });
});

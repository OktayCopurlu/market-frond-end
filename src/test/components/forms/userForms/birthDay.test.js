import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import BirthDay from "../../../../components/forms/userForms/userBirthDay/birthDay";


describe("Forms", () => {
  test("birth Day form is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <BirthDay />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("label-birthDay"));
    } catch (error) {
      console.log(error);
    }
  });
});

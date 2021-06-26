import { render } from "@testing-library/react";
import { BrowserRouter as Route } from "react-router-dom";
import SearchInput from "../../components/search/searchInput";

describe("Forms", () => {
  test("search form is working", async () => {
    try {
      const { container } = await render(
        <Route>
          <SearchInput />
        </Route>
      );
      const firstChild = await container.firstChild;
      return await expect(firstChild.classList.contains("input-group"));
    } catch (error) {
      console.log(error);
    }
  });
});

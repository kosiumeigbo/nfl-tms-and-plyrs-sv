import HomePageWrapper from "./HomePage.test.svelte";
import { render, screen } from "@testing-library/svelte";

describe("Home component", () => {
  test("it renders", () => {
    render(HomePageWrapper);
    screen.debug();
    const exploreTeamsButton = screen.getByRole("button", { name: /explore teams/i });
    expect(exploreTeamsButton).toBeInTheDocument();
  });
});

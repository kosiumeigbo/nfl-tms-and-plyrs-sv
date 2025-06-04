import Home from "./Home.svelte";
import { render, screen } from "@testing-library/svelte";

describe("Home component", () => {
  test("it renders", () => {
    render(Home);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});

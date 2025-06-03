import { render, screen } from "@testing-library/svelte/svelte5";
import Home from "./Home.svelte";

describe("/home.svelte", () => {
  test("should render h1", () => {
    console.log("ENVIRONMENT:", typeof window);
    render(Home);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});

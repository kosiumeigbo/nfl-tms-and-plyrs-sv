import { render, screen } from "@testing-library/svelte";
import Page from "./+page.svelte";

describe("/+page.svelte", () => {
  test("should render h1", () => {
    console.log("ENVIRONMENT:", typeof window);
    render(Page);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});

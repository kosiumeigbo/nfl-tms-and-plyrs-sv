/** @type {import('vite').UserConfig} */

import tailwindcss from "@tailwindcss/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), sveltekit(), svelteTesting()],
  resolve: process.env.VITEST
    ? {
        conditions: ["browser"],
      }
    : undefined,
  test: {
    clearMocks: true,
    include: ["src/**/*.{test,spec}.{js,ts}"],
    environmentMatchGlobs: [
      ["src/**/*.svelte.{test,spec}.{js,ts}", "jsdom"],
      ["src/**/*.{!svelte}.{test,spec}.{js,ts}", "node"],
    ],
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    css: true,
    printConsoleTrace: true,
    // projects: [{ test: {} }],
  },
});

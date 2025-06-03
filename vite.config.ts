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
    globals: true,
    css: true,
    printConsoleTrace: true,
    projects: [
      {
        extends: true,
        test: {
          name: "client",
          environment: "jsdom",
          include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
          setupFiles: ["./vitest-setup-client.ts"],
        },
      },
      {
        extends: true,
        test: {
          name: "server",
          environment: "node",
          include: ["src/**/*.{test,spec}.{js,ts}"],
          exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"],
          // setupFiles: ["./vitest-setup-server.ts"],
        },
      },
    ],
  },
});

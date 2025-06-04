import prettier from "eslint-config-prettier";
import js from "@eslint/js";
import { includeIgnoreFile } from "@eslint/compat";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import { fileURLToPath } from "node:url";
import ts from "typescript-eslint";
import svelteConfig from "./svelte.config.js";
import eslint from "@eslint/js";
import vitest from "@vitest/eslint-plugin";

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default ts.config(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs.recommended,
  prettier,
  ...svelte.configs.prettier,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: { "no-undef": "off" },
  },
  {
    ...vitest.configs.recommended,
    files: ["**/*.{test,spec}.ts", "./vitest-setup-client.ts", "./vitest-setup-server.ts"],
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
        svelteConfig,
      },
    },
  },
  {
    files: ["**/*.ts"],
    extends: [eslint.configs.recommended, ts.configs.strictTypeChecked, ts.configs.stylisticTypeChecked],
    ignores: [
      "commitlint.config.js",
      ".prettierrc",
      "svelte.config.js",
      "**/.svelte-kit/**/*.ts",
      "node_modules/",
      "**/*.svelte",
      "**/*.svelte.ts",
      "**/*.svelte.js",
      "./vitest-setup-client.ts",
      "./vitest-setup-server.ts",
    ],
    plugins: { "@typescript-eslint": ts.plugin },
    languageOptions: {
      parser: ts.parser,
      parserOptions: { project: "./tsconfig.json" },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/no-confusing-void-expression": [
        "error",
        {
          "ignoreArrowShorthand": true,
        },
      ],
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/only-throw-error": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
);

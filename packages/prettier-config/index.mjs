import { createRequire } from "module";

const require = createRequire(import.meta.url);

/** @type {import("prettier").Config} */

export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "auto",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

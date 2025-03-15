import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports"; // Add this import

// Create a clean copy of browser globals without any whitespace in keys
const browserGlobals = {};
Object.entries(globals.browser).forEach(([key, value]) => {
  const trimmedKey = key.trim();
  if (trimmedKey) {
    browserGlobals[trimmedKey] = value;
  }
});

export default tseslint.config(
  { ignores: ["dist", "public", "node_modules", "src/**/_*.jsx"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: browserGlobals,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: reactPlugin,
      prettier: prettierPlugin,
      "unused-imports": unusedImports, // Add this plugin
    },
    rules: {
      // Disable the base rule as it can report incorrect errors
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Add these rules to remove unused imports and variables
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // Your existing rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/prop-types": ["warn", { skipUndeclared: true }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": ["warn"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
);

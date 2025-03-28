
export default [
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        browser: true,
        document: true,
        window: true,
        console: true,
      },
    },
    rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  }
];

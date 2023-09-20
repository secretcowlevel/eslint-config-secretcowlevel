module.exports = {
  extends: [
    "standard-with-typescript",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  rules: {
    "eqeqeq": ["error", "always"],
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "lines-between-class-members": 2,
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "block-like",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "block-like",
      },
      {
        blankLine: "always",
        prev: "import",
        next: "*",
      },
      {
        blankLine: "never",
        prev: "import",
        next: "import",
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["multiline-expression"],
      },
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "export",
      },
    ],
    "no-console": "error",
  },
};

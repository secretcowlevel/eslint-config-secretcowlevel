module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    // type specific stuff
    tsconfigRootDir: process.cwd(),
    project: "tsconfig.json",
  },

  extends: ["./rules/base.js", "plugin:prettier/recommended"],
};

import js from "@eslint/js";
import globals from "globals";
import {defineConfig} from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([{
  files: ["**/*.{js,mjs,cjs}"],
  plugins: {js, "@stylistic": stylistic},
  extends: ["js/recommended"],
  languageOptions: {globals: {...globals.browser, ...globals.node}},
  rules: {
    "@stylistic/semi": "error",
    "@stylistic/indent": ["error", 2],
    "@stylistic/array-bracket-newline": ["error", { "minItems": 3 }],
    "@stylistic/array-bracket-spacing": ["error", "never"],
    "@stylistic/arrow-spacing": "error",
    "@stylistic/block-spacing": "error",
    "@stylistic/brace-style": "error",
    "@stylistic/comma-dangle": ["error", {
      "objects": "always-multiline",
      "arrays": "always-multiline",
      "functions": "never",
    }],
    "@stylistic/comma-spacing": ["error", { "before": false, "after": true }],
    "@stylistic/function-call-spacing": ["error", "never"],
    "@stylistic/no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "@stylistic/no-multi-spaces": ["error", { ignoreEOLComments: false }],
    "@stylistic/no-extra-semi": "error",
    "@stylistic/no-floating-decimal": "error",
    "@stylistic/no-mixed-operators": "error",
    "@stylistic/no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, maxBOF: 0 }],
    "@stylistic/quotes": ["error", "double"],
  },
}]);

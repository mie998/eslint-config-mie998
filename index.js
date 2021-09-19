module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "prettier",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommeded",
  ],
  rules: {
    camelcase: "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",

    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],

    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",

    "react/react-in-jsx": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: ["jsx", "tsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/no-danger": "off",
    "react/require-default-props": "off",
    "react/default-props-match-prop-types": "off",
    "react/display-name": "off",
    "react/destructuring-assignment": "off",

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",

    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-onchange": "off",
    "jsx-a11y/accessible-emoji": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        controlComponents: ["Checkbox"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*"],
      excludedFiles: ["**/*.d.ts"],
      rules: {
        "import/no-default-export": "error",
      },
    },
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", "jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
    },
    react: {
      version: "detect",
    },
  },
};

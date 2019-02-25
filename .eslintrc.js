module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ["airbnb", "prettier", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react",  "class-property"],
  rules: {
    "no-shadow": "off",
    // https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/label-has-for": [2, {
      required: {
        some: ["nesting", "id"]
      }
    }],
    "jsx-a11y/label-has-associated-control": [2, {
      labelComponents: ['label'],
    }],
  }
};

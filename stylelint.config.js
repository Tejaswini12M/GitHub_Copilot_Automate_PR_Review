module.exports = {
  extends: "stylelint-config-standard-scss",
  rules: {
    // Disallow px units in SCSS
    "unit-disallowed-list": ["px"],
  },
  ignoreFiles: ["**/node_modules/**"]
};

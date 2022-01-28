// module.exports = {
//   root: true,
//   env: {
//     es6: true,
//     node: true,
//   },
//   extends: [
//     "eslint:recommended",
//     "google",
//   ],
//   rules: {
//     quotes: ["error", "double"],
//   },
// };

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint",
    ecmaVersion: 2017,
  },
  rules: {
    quotes: ["error", "double"],
  },
};

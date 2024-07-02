// module.exports = {
//   root: true,
//   extends: '@react-native',
// };
module.exports = {
  // root: true,
  // extends: '@react-native',
  env: {browser: true, es6: true},
  extends: ['react-app', 'prettier'],
  plugins: ['react', 'prettier'],
  parserOptions: {ecmaVersion: 2018},
  rules: {
    // "prettier/prettier": [
    //   "error",
    //   {
    //     "semi": true,
    //     "jsxSingleQuote": true,
    //     "singleQuote": true
    //   }
    // ]
  },
};

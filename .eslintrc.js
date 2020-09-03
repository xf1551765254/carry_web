module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  // env: {
  //   browser: true,
  //   node: true,
  //   es6: true
  // },
  // 'extends': [
  //   'plugin:vue/essential', 'plugin:vue/recommended', 'eslint:recommended'
  // ],
  // rules: {
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  // },

  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    //'@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }

}

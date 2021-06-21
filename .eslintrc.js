module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'vue/script-indent': [
      'error',
      2,
      {
        switchCase: 1,
        ignores: []
      }
    ],
    'no-mixed-spaces-and-tabs': [1, 'smart-tabs'], // 禁止使用 空格 和 tab 混合缩进
    'no-extra-semi': 0, // 不需要加分号
    eqeqeq: ['error', 'smart'], // "smart"除了特殊情况，强制使用 === 和 !==（https://cn.eslint.org/docs/rules/eqeqeq）
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [2, 'never'], //语句强制分号结尾
    'comma-dangle': ['error', 'never'], //禁用拖尾逗号
    'linebreak-style': ['off', 'windows'],
    camelcase: [0, 'never'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // 允许一元运算符++并--在事后（最终表达式）中for循环
    'import/prefer-default-export': 0,
    'global-require': 0
  }
}

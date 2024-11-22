const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  overrides: [
    {
      files: ['./src/**/*.{js,jsx,ts,tsx}'],
    },
  ],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // Prettier와 ESLint 통합
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'jsx-a11y',
    'import',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+에서 필요 없음
    'react/prop-types': 'off', // TypeScript를 사용하므로 PropTypes 비활성화
    '@typescript-eslint/no-unused-vars': ['warn'], // 사용하지 않는 변수 경고
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false }], // 익명 함수에 화살표 함수 강제
    'arrow-body-style': ['error', 'as-needed'], // 화살표 함수에서 필요 시에만 중괄호 허용
    'no-restricted-syntax': [
      'error',
      {
        selector: 'FunctionDeclaration',
        message: 'Named functions are not allowed. Use arrow functions instead.',
      },
    ], // 명명된 함수 선언 금지
    'prettier/prettier': 'error', // Prettier 규칙 위반 시 오류
  },
  settings: {
    react: {
      version: 'detect', // React 버전을 자동 감지
    },
  },
});

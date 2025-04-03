module.exports = {
  extends: [
  'eslint:recommended', 'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint'
  ],
  rules: {
    'default-case': 0,
    'import/no-extraneous-dependencies': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/no-find-dom-node': 0,
    'react/no-did-update-set-state': 0,
    'react/no-unused-state': 0,
    'react/sort-comp': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/consistent-type-exports': 0,
  },
};

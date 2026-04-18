import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginN from 'eslint-plugin-n';

export default [
  {
    ignores: ['eslint.config.js', 'node_modules/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2024,
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      n: pluginN,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginN.configs['flat/recommended'].rules,
      'no-console': 'off',
      'n/no-process-exit': 'off',
      'n/no-unpublished-import': 'off',
      'n/no-missing-import': 'off',
    },
  },
]
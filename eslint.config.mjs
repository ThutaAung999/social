import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettierConfig from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // General file matching for linting
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  // Recommended rules for JavaScript
  pluginJs.configs.recommended,
  // Recommended rules for React
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
  // Import validation rules
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/no-unresolved': 'error', // Ensure imports resolve correctly
      'import/named': 'error', // Ensure named imports exist in the module
    },
  },
  // Prettier integration
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...prettierConfig.rules, // Disable conflicting ESLint rules
      'prettier/prettier': 'error', // Show Prettier issues as ESLint errors
    },
  },
  // Custom rules for all files
  {
    rules: {
      quotes: ['error', 'single'], // Enforce single quotes
      'react/jsx-uses-react': 'off', // Disable for React 17+ JSX runtime
      'react/react-in-jsx-scope': 'off', // Disable for React 17+ JSX runtime
      'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }], // Highlight unused variables and imports
      'no-console': ['warn'], // Warn for console.log statements
      'linebreak-style': ['error', 'unix'], // Enforce LF line endings
    },
  },
];

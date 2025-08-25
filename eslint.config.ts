import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  tseslint.configs.recommended,
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
    },
  },
  globalIgnores(['!node_modules/', 'node_modules/*', 'dist']),
]);

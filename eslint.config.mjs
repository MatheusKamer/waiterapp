import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    languageOptions: {
      globals: globals.node,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      'quotes': ['error', 'single'], // Aspas simples
      'semi': ['error', 'always'], // Ponto e vírgula
      'no-unused-vars': 'warn', // Aviso para variáveis não usadas
      'no-console': 'off', // Permitir console.log
      'indent': ['error', 2], // Indentação de 2 espaços
      'linebreak-style': ['error', 'unix'], // Estilo de quebra de linha UNIX
      'space-before-function-paren': ['error', 'never'], // Sem espaço antes dos parênteses da função
      // Adicione outras regras conforme necessário
    },
  },
];

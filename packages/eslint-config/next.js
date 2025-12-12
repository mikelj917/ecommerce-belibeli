// packages/eslint-config/next.js
import baseConfig from "./base.js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...baseConfig, // Importa sua base (TS, Prettier, Sorting)

  {
    // 1. Configurações de arquivos
    files: ["**/*.{js,jsx,ts,tsx}"],

    // 2. Configurações de ambiente para Browser/React
    languageOptions: {
      // Permite usar variáveis globais do navegador (window, document, etc.)
      globals: {
        ...globals.browser,
      },
    },

    // 3. Configurações do React
    settings: {
      react: { version: "detect" },
    },

    // 4. Plugins
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },

    // 5. Regras
    rules: {
      // --- Regras Padrão do React (Recomendado) ---

      // Desliga porque o Next/React moderno (new JSX transform) não exige a importação explícita de 'React'
      "react/react-in-jsx-scope": "off",

      // Regra essencial para React Hooks
      ...reactHooksPlugin.configs.recommended.rules,

      // Configurações de JSX (para usar o TS ESlint parser)
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],

      // --- Regras de Qualidade (Next.js usa muito) ---

      // Exige que use 'key' em listas iteradas
      "react/jsx-key": "error",

      // Desativa PropTypes, pois usamos TypeScript
      "react/prop-types": "off",

      // Permite que componentes recebam 'rest' props
      "react/display-name": "off",

      // --- Regras de Acessibilidade (Cruciais para Web) ---
      ...jsxA11yPlugin.configs.recommended.rules,

      // Desativa regras do Next.js Legacy (já que removemos o pacote oficial)
      // Se precisar, você pode implementar manualmente as verificações críticas do Next.js aqui
      // Ex: "jsx-a11y/anchor-is-valid": ["error", { components: ["Link"], specialLink: ["hrefLeft", "hrefRight"] }]
    },
  },
];

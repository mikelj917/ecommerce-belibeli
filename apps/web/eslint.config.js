import nextConfig from "@repo/eslint-config/next";

export default [
  ...nextConfig,
  {
    // Adicione aqui as regras de IGNORE específicas do Next.js
    ignores: [
      "node_modules",
      ".next", // Diretório de build do Next.js
      ".turbo",
      "dist",
      "*.config.js",
      "*.config.ts",
      // Se você ainda tinha eslint-config-next, ele gerava um next.d.ts na raiz. Ignore se existir.
      "next-env.d.ts",
    ],
  },
];

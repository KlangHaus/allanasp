module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    // 'prettier/vue',
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [
    "build/",
    "node_modules/",
    ".nuxt/",
    "coverage/",
    "/**/*.d.ts\n",
  ],
  plugins: ["@typescript-eslint", "vue"],
  // add your custom rules here
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "warn",
      {
        htmlWhitespaceSensitivity: "css",
        semi: true,
        endOfLine: "auto",
        singleQuote: false,
      },
    ],
    "vue/no-v-html": "warn",
  },
  globals: {
    $nuxt: true,
  },
};

import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    files: ['**/*.{js,mjs,jsx,vue}'],
    languageOptions: {
      globals: {
        process: 'readonly', //
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginVue.configs['flat/essential'].rules,
      // added new roles below...
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    },
  },
  skipFormatting,

  //ignore files
  {
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

]

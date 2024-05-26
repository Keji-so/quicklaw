import preferArrowFn from 'eslint-plugin-prefer-arrow-functions'
import tailwindcss from 'eslint-plugin-tailwindcss'

import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  stylistic: true,

  plugins: {
    'prefer-arrow-functions': preferArrowFn,
    'tailwindcss': tailwindcss
  },

  rules: {
    'quotes': ['error', 'single', { avoidEscape: true }],
    'prefer-template': 'off',
    'style/comma-dangle': 'off',

    // vue
    'vue/attribute-hyphenation': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true
      }
    ],
    'vue/block-order': [
      'error',
      {
        order: [['template', 'script'], 'style']
      }
    ],

    // antfu
    'antfu/top-level-function': 'off' as const,

    // tailwindcss
    'tailwindcss/classnames-order': [
      'error',
      {
        removeDuplicates: true,
        skipClassAttribute: false
      }
    ],

    // prefer arrow function
    'prefer-arrow-functions/prefer-arrow-functions': [
      'error',
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
        returnStyle: 'implicit',
        singleReturnOnly: false
      }
    ]
  }
})

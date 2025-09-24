import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    stylistic: {
      indent: 2,
      semi: false,
    },
    test: {
      overrides: {
        'test/prefer-to-be': 'error',
        'test/no-identical-title': 'error',
      },
    },
  },
)

import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
    overrides: {
      'max-len': ['error', { code: 120 }],
    },
  },
  ignores: ['stryker.config.mjs'],
});

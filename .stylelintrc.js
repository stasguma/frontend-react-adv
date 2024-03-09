import { propertyGroups } from 'stylelint-config-clean-order';

const propertiesOrder = propertyGroups.map(properties => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'threshold',
  properties,
}));

/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
    'stylelint-config-clean-order',
  ],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
        emptyLineBeforeUnspecified: 'always',
        emptyLineMinimumPropertyThreshold: 6,
      },
    ],
    'scss/function-no-unknown': null,
    'no-descending-specificity': null,
    'selector-class-pattern': [
      '^[a-z]+([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        message: 'Expected class selector "%s" to be lowercase and BEM format',
        severity: 'warning',
      },
    ],
    'scss/dollar-variable-pattern': [
      '^[a-z]+([-]?[a-z0-9]+)*$',
      {
        ignore: 'local'
      }
    ]
  },
};

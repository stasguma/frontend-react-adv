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
  },
};

module.exports = {
    "root": true,
    "ignorePatterns": ['.eslintrc.js'],
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@stylistic/disable-legacy",
        "plugin:@stylistic/recommended-extends"
    ],
    // "overrides": [
    //     {
    //         "env": {
    //             "node": true
    //         },
    //         "files": [
    //             ".eslintrc.{js,cjs}"
    //         ],
    //         "parserOptions": {
    //             "sourceType": "script"
    //         }
    //     }
    // ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@stylistic"
    ],
    "rules": {
        "@typescript-eslint/non-nullable-type-assertion-style": "off",
        "@typescript-eslint/strict-boolean-expressions": ["error", {
            "allowNullableBoolean": true
        }],
        "@stylistic/semi": ["warn", "always"],
        "@stylistic/member-delimiter-style": ["error", {
            "singleline": { "delimiter": "semi", "requireLast": true },
            "multiline": { "delimiter": "semi", "requireLast": true },
        }],
        "@stylistic/comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never"
        }],
        "@stylistic/brace-style": ["error", "1tbs", {
            "allowSingleLine": true
        }],
    },
}

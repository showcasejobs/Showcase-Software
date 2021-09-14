'use strict';

/* eslint-disable capitalized-comments */

const Path = require('path');

// eslint-disable-next-line max-len
// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
const baseNamingConvention = [
    {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        filter: {
            regex: '^Ajv|DataTypes|Utils|Op$',
            match: false,
        },
    },
    {
        selector: 'enum',
        format: ['PascalCase'],
    },
    {
        selector: 'enumMember',
        format: ['UPPER_CASE'],
    },
    {
        selector: 'property',
        modifiers: ['public'],
        format: null,
    },
    {
        selector: 'typeProperty',
        modifiers: ['public'],
        format: ['camelCase', 'snake_case'],
        filter: {
            regex: '^_NO_EQUAL|_matchesInfo$',
            match: false,
        },
    },
    {
        selector: 'property',
        modifiers: ['static', 'readonly'],
        format: ['camelCase'],
    },
    {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
    },
    {
        selector: 'class',
        format: ['PascalCase'],
    },
    {
        selector: 'interface',
        format: ['PascalCase'],
    },
    {
        selector: 'typeAlias',
        format: ['PascalCase'],
    },
    {
        selector: 'typeParameter',
        format: ['PascalCase'],
    },
];

module.exports = {

    extends: [
        'eslint:recommended',
        'plugin:jsdoc/recommended',
        'plugin:@next/next/recommended',
        'plugin:node/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
    ],

    root: true,

    env: {
        es2020: true,
        node: true,
    },

    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jsdoc', '@next/next', 'node', 'react', 'react-hooks', 'jsx-a11y'],

    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: Path.resolve(__dirname, './tsconfig.eslint.json'),
        extraFileExtensions: ['.cjs'],
    },

    settings: {
        react: {
            version: '17.0.2',
        },
        linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
    },

    rules: {
        'accessor-pairs': 'off',
        'array-bracket-newline': [
            'error',
            {
                multiline: true,
            },
        ],
        'array-bracket-spacing': 'error',
        'array-callback-return': 'error',
        'array-element-newline': ['error', 'consistent'],
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'block-scoped-var': 'error',
        'block-spacing': 'error',
        'brace-style': 'off', // @typescript-eslint/brace-style
        'callback-return': 'off',
        'camelcase': 'off',
        'capitalized-comments': [
            'error',
            'always',
            {
                ignoreConsecutiveComments: true,
                ignoreInlineComments: true,
                ignorePattern: '\\w+:',
            },
        ],
        'class-methods-use-this': ['error', { exceptMethods: ['render'] }],
        'comma-dangle': 'off', // @typescript-eslint/comma-dangle
        'comma-spacing': 'off', // @typescript-eslint/comma-spacing
        'comma-style': ['error', 'last'],
        'complexity': 'error',
        'computed-property-spacing': 'error',
        'consistent-return': 'off',
        'consistent-this': ['error', 'self'],
        'constructor-super': 'error',
        'curly': 'error',
        'default-case': 'error',
        'default-param-last': 'off', // @typescript-eslint/default-param-last
        'dot-location': ['error', 'property'],
        'dot-notation': 'off', // @typescript-eslint/dot-notation
        'eol-last': ['error', 'always'],
        'eqeqeq': 'error',
        'for-direction': 'error',
        'func-call-spacing': 'off', // @typescript-eslint/func-call-spacing
        'func-name-matching': 'error',
        'func-names': ['error', 'never'],
        'func-style': [
            'error',
            'expression',
            { allowArrowFunctions: true },
        ],
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'global-require': 'error',
        'guard-for-in': 'error',
        'handle-callback-err': 'off',
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        'indent': 'off', // @typescript-eslint/indent
        'init-declarations': 'off', // @typescript-eslint/init-declarations
        'jsx-quotes': ['error', 'prefer-single'],
        'key-spacing': [
            'error',
            {
                afterColon: true,
                beforeColon: false,
                mode: 'strict',
            },
        ],
        'keyword-spacing': 'off', // @typescript-eslint/keyword-spacing
        'line-comment-position': 'off',
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': 'off',
        'lines-between-class-members': 'off', // @typescript-eslint/lines-between-class-members
        'max-depth': 'off',
        'max-len': ['error', { code: 120 }],
        'max-lines': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',
        'max-statements': 'off',
        'max-statements-per-line': ['error', { max: 1 }],
        'multiline-ternary': 'off',
        'new-cap': ['error', { capIsNew: false }],
        'new-parens': 'error',
        'newline-per-chained-call': 'off',
        'no-alert': 'error',
        'no-array-constructor': 'off', // @typescript-eslint/no-array-constructor
        'no-await-in-loop': 'off',
        'no-bitwise': 'error',
        'no-buffer-constructor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-class-assign': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-constructor-return': 'error',
        'no-continue': 'off',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-div-regex': 'error',
        'no-dupe-args': 'error',
        'no-dupe-class-members': 'off', // @typescript-eslint/no-dupe-class-members
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'off', // @typescript-eslint/no-duplicate-imports
        'no-else-return': 'error',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-empty-character-class': 'error',
        'no-empty-function': 'off', // @typescript-eslint/no-empty-function
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-label': 'error',
        'no-extra-parens': 'off', // @typescript-eslint/no-extra-parens
        'no-extra-semi': 'off', // @typescript-eslint/no-extra-semi
        'no-fallthrough': 'off',
        'no-floating-decimal': 'error',
        'no-func-assign': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': ['error', { allow: ['!!'] }],
        'no-implicit-globals': 'error',
        'no-implied-eval': 'off', // @typescript-eslint/no-implied-eval
        'no-inline-comments': 'off',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-invalid-this': 'off', // @typescript-eslint/no-invalid-this
        'no-irregular-whitespace': 'error',
        'no-iterator': 'error',
        'no-label-var': 'error',
        'no-labels': 'off',
        'no-lone-blocks': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'off', // @typescript-eslint/no-loop-func
        'no-loss-of-precision': 'off', // @typescript-eslint/no-loss-of-precision
        'no-magic-numbers': 'off', // @typescript-eslint/no-magic-numbers
        'no-mixed-operators': [
            'error',
            {
                groups: [['&&', '||']],
                allowSamePrecedence: true,
            },
        ],
        'no-mixed-requires': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxEOF: 0,
                maxBOF: 0,
            },
        ],
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-new-require': 'error',
        'no-new-symbol': 'error',
        'no-new-wrappers': 'error',
        'no-obj-calls': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-path-concat': 'error',
        'no-plusplus': 'off',
        'no-process-env': 'off', // node/no-process-env
        'no-process-exit': 'off',
        'no-proto': 'error',
        'no-prototype-builtins': 'error',
        'no-redeclare': 'off', // @typescript-eslint/no-redeclare
        'no-regex-spaces': 'error',
        'no-restricted-globals': 'error',
        'no-restricted-imports': 'off',
        'no-restricted-modules': 'off',
        'no-restricted-properties': 'off',
        'no-restricted-syntax': [
            'error',
            {
                selector: 'TSEnumDeclaration:not([const=true])',
                message: 'Don\'t declare non-const enums',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code ' +
                    'confusing and hard to maintain and understand.',
            },
        ],
        'no-return-assign': 'error',
        'no-return-await': 'off', // @typescript-eslint/return-await
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': 'off', // @typescript-eslint/no-shadow
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-sync': 'off',
        'no-tabs': 'error',
        'no-template-curly-in-string': 'error',
        'no-ternary': 'off',
        'no-this-before-super': 'error',
        'no-throw-literal': 'off', // @typescript-eslint/no-throw-literal
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-underscore-dangle': 'off',
        'no-unexpected-multiline': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': 'off', // @typescript-eslint/no-unused-expressions
        'no-unused-labels': 'error',
        'no-unused-vars': 'off', // @typescript-eslint/no-unused-vars
        'no-use-before-define': 'off', // @typescript-eslint/no-use-before-define
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'off', // @typescript-eslint/no-useless-constructor
        'no-useless-escape': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': ['error', { allowAsStatement: true }],
        'no-warning-comments': 'off',
        'no-whitespace-before-property': 'error',
        'no-with': 'error',
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true,
            },
        ],
        'object-curly-spacing': 'off', // @typescript-eslint/object-curly-spacing
        'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
        'object-shorthand': ['error', 'always'],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'after'],
        'padded-blocks': 'off',
        'padding-line-between-statements': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': 'off', // @typescript-eslint/quotes
        'radix': ['error', 'always'],
        'require-atomic-updates': 'error',
        'require-await': 'off', // @typescript-eslint/require-await
        'require-yield': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'semi': 'off', // @typescript-eslint/semi
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'semi-style': ['error', 'last'],
        'sort-imports': 'off',
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': 'off', // @typescript-eslint/space-before-function-paren
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'off', // @typescript-eslint/space-infix-ops
        'space-unary-ops': 'error',
        'spaced-comment': [
            'error',
            'always',
            {
                exceptions: ['*'],
                markers: ['!'],
            },
        ],
        'strict': ['error', 'never'],
        'switch-colon-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': ['error', 'never'],
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'vars-on-top': 'off',
        'wrap-iife': 'error',
        'wrap-regex': 'off',
        'yield-star-spacing': ['error', 'after'],
        'yoda': 'error',

        // JS Doc
        'jsdoc/check-access': 'error',
        'jsdoc/check-alignment': 'error',
        'jsdoc/check-examples': 'off',
        'jsdoc/check-indentation': [
            'error',
            {
                excludeTags: ['example', 'param', 'returns'],
            },
        ],
        'jsdoc/check-param-names': 'error',
        'jsdoc/check-property-names': 'error',
        'jsdoc/check-syntax': 'error',
        'jsdoc/check-tag-names': 'error',
        'jsdoc/check-types': 'error',
        'jsdoc/check-values': 'error',
        'jsdoc/empty-tags': 'error',
        'jsdoc/implements-on-classes': 'error',
        'jsdoc/match-description': 'error',
        'jsdoc/newline-after-description': 'error',
        'jsdoc/no-multi-asterisks': [
            'error',
            {
                preventAtEnd: true,
                preventAtMiddleLines: true,
            },
        ],
        'jsdoc/no-types': 'off',
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/require-description-complete-sentence': 'off',
        'jsdoc/require-description': [
            'error',
            { descriptionStyle: 'body' },
        ],
        'jsdoc/require-example': 'off',
        'jsdoc/require-file-overview': 'off',
        'jsdoc/require-hyphen-before-param-description': 'error',
        'jsdoc/require-jsdoc': [
            'error',
            {
                require: {
                    ArrowFunctionExpression: false,
                    ClassDeclaration: true,
                    ClassExpression: true,
                    FunctionDeclaration: true,
                    FunctionExpression: false,
                    MethodDefinition: true,
                },
                contexts: [
                    'ExportDefaultDeclaration > ArrowFunctionExpression',
                    'ExportNamedDeclaration > ArrowFunctionExpression',
                    'ExportDefaultDeclaration > FunctionExpression',
                    'ExportNamedDeclaration > FunctionExpression',
                ],
            },
        ],
        'jsdoc/require-param-description': 'error',
        'jsdoc/require-param-name': 'error',
        'jsdoc/require-param-type': 'error',
        'jsdoc/require-param': 'error',
        'jsdoc/require-property': 'error',
        'jsdoc/require-property-description': 'error',
        'jsdoc/require-property-name': 'error',
        'jsdoc/require-property-type': 'error',
        'jsdoc/require-returns-check': 'error',
        'jsdoc/require-returns-description': 'error',
        'jsdoc/require-returns-type': 'error',
        'jsdoc/require-returns': 'error',
        'jsdoc/tag-lines': [
            'error',
            'never',
            {
                count: 1,
                noEndLines: true,
                tags: {
                    example: { lines: 'always' },
                    see: { lines: 'always' },
                },
            },
        ],
        'jsdoc/valid-types': 'error',

        // NextJS
        '@next/next/google-font-display': 'error',
        '@next/next/no-css-tags': 'error',
        '@next/next/no-html-link-for-pages': [
            'error',
            Path.join(__dirname, './pages'),
        ],
        '@next/next/no-sync-scripts': 'error',
        '@next/next/google-font-preconnect': 'error',
        '@next/next/no-document-import-in-page': 'error',
        '@next/next/no-img-element': 'error',
        '@next/next/no-title-in-document-head': 'error',
        '@next/next/link-passhref': 'error',
        '@next/next/no-head-import-in-document': 'error',
        '@next/next/no-page-custom-font': 'error',
        '@next/next/no-unwanted-polyfillio': 'error',

        // Node
        'node/no-unsupported-features/es-builtins': 'error',
        'node/no-unsupported-features/es-syntax': [
            'error',
            { ignores: ['dynamicImport', 'modules'] },
        ],
        'node/no-unsupported-features/node-builtins': 'error',
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always'],
        'node/prefer-global/text-decoder': ['error', 'always'],
        'node/prefer-global/text-encoder': ['error', 'always'],
        'node/prefer-global/url-search-params': ['error', 'always'],
        'node/prefer-global/url': ['error', 'always'],
        'node/prefer-promises/dns': 'error',
        'node/prefer-promises/fs': 'error',
        'node/callback-return': ['error', ['callback', 'cb', 'next', 'done']],
        'node/exports-style': ['error', 'module.exports'],
        'node/file-extension-in-import': [
            'error',
            'always',
            {
                '.js': 'never',
                '.ts': 'never',
                '.tsx': 'never',
            },
        ],
        'node/global-require': 'error',
        'node/handle-callback-err': 'error',
        'node/no-callback-literal': 'error',
        'node/no-deprecated-api': 'error',
        'node/no-exports-assign': 'error',
        'node/no-extraneous-import': 'off', // Fails to detect parent node_modules
        'node/no-extraneous-require': 'off', // Same
        'node/no-missing-import': 'off',
        'node/no-missing-require': 'off',
        'node/no-mixed-requires': [
            'error',
            {
                grouping: false,
                allowCall: false,
            },
        ],
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
        'node/no-process-env': 'error',
        'node/no-process-exit': 'error',
        'node/no-sync': ['error', { allowAtRootLevel: true }],
        'node/no-unpublished-bin': 'error',
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
        'node/process-exit-as-throw': 'error',
        'node/shebang': 'off',

        // Typescript
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': ['error', { default: 'array' }],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': [
            'error', {
                'ts-expect-error': true,
                'ts-ignore': true,
                'ts-nocheck': true,
                'ts-check': true,
            },
        ],
        '@typescript-eslint/ban-tslint-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'allow-as-parameter',
            },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-function-return-type': [
            'error', {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error', {
                accessibility: 'explicit',
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': [
            'error', {
                allowTypedFunctionExpressions: false,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                shouldTrackReferences: false,
            },
        ],
        '@typescript-eslint/member-delimiter-style': [
            'error', {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/member-ordering': [
            'error', {
                default: [
                    'signature',
                    'static-field',
                    'instance-field',
                    'field',
                    'constructor',
                    'public-method',
                    'method',
                ],
            },
        ],
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/naming-convention': [
            'error',
            ...baseNamingConvention,
        ],
        '@typescript-eslint/no-base-to-string': [
            'error',
            {
                ignoredTypeNames: ['Buffer', 'RegExp'],
            },
        ],
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': [
            'error',
            {
                ignoreArrowShorthand: false,
                ignoreVoidOperator: false,
            },
        ],
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-empty-interface': [
            'error',
            { allowSingleExtends: true },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-extraneous-class': [
            'error', {
                allowConstructorOnly: false,
                allowEmpty: false,
                allowStaticOnly: true,
                allowWithDecorator: false,
            },
        ],
        '@typescript-eslint/no-floating-promises': [
            'error', {
                ignoreVoid: true,
                ignoreIIFE: false,
            },
        ],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implicit-any-catch': 'error',
        '@typescript-eslint/no-inferrable-types': [
            'error', {
                ignoreParameters: false,
                ignoreProperties: false,
            },
        ],
        '@typescript-eslint/no-invalid-void-type': [
            'error', {
                allowInGenericTypeArguments: true,
                allowAsThisParameter: true,
            },
        ],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': [
            'error', {
                checksVoidReturn: true,
                checksConditionals: true,
            },
        ],
        '@typescript-eslint/no-namespace': [
            'error', {
                allowDeclarations: false,
                allowDefinitionFiles: false,
            },
        ],
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-type-alias': [
            'error',
            {
                allowAliases: 'always',
                allowCallbacks: 'always',
                allowConditionalTypes: 'always',
                allowLiterals: 'in-unions-and-intersections',
                allowMappedTypes: 'always',
            },
        ],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': ['error', { typesToIgnore: [] }],
        '@typescript-eslint/no-unnecessary-type-constraint': 'off',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-unused-vars-experimental': [
            'error',
            { ignoreArgsIfArgsAfterAreUsed: true },
        ],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-literal-enum-member': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': [
            'error', {
                ignoreConditionalTests: true,
                ignoreMixedLogicalExpressions: false,
            },
        ],
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        '@typescript-eslint/prefer-readonly': ['error', { onlyInlineLambdas: false }],
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/promise-function-async': [
            'error', {
                allowAny: true,
                checkArrowFunctions: true,
                checkFunctionDeclarations: true,
                checkFunctionExpressions: true,
                checkMethodDeclarations: true,
            },
        ],
        '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/restrict-plus-operands': [
            'error',
            { checkCompoundAssignments: true },
        ],
        '@typescript-eslint/restrict-template-expressions': [
            'error', {
                allowNumber: true,
                allowBoolean: true,
                allowAny: false,
                allowNullish: false,
            },
        ],
        '@typescript-eslint/sort-type-union-intersection-members': [
            'error',
            {
                checkIntersections: true,
                checkUnions: true,
                groupOrder: [
                    'literal',
                    'keyword',
                    'named',
                    'operator',
                    'import',
                    'object',
                    'tuple',
                    'function',
                    'conditional',
                    'intersection',
                    'union',
                    'nullish',
                ],
            },
        ],
        '@typescript-eslint/strict-boolean-expressions': [
            'error', {
                allowString: true,
                allowNumber: true,
                allowNullableObject: true,
                allowNullableBoolean: true,
                allowNullableString: true,
                allowNullableNumber: true,
                allowAny: true,
            },
        ],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/triple-slash-reference': [
            'error', {
                path: 'never',
                types: 'never',
                lib: 'never',
            },
        ],
        '@typescript-eslint/type-annotation-spacing': [
            'error', {
                before: false,
                after: true,
                overrides: {
                    arrow: {
                        before: true,
                        after: true,
                    },
                },
            },
        ],
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/unbound-method': ['error', { ignoreStatic: false }],
        '@typescript-eslint/unified-signatures': 'error',

        // Typescript Override
        '@typescript-eslint/brace-style': ['error', '1tbs'],
        '@typescript-eslint/comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                enums: 'always',
                exports: 'always-multiline',
                functions: 'never',
                generics: 'never',
                imports: 'always-multiline',
                objects: 'always-multiline',
                tuples: 'always-multiline',
            },
        ],
        '@typescript-eslint/comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                // note: https://astexplorer.net/ is great for figuring these out
                ignoredNodes: [
                    'TemplateLiteral > ArrowFunctionExpression > BlockStatement',
                    ':matches(TemplateLiteral, TSIntersectionType, TSTypeParameterInstantiation, TSUnionType) > *',
                    'TSAsExpression > CallExpression > ArrowFunctionExpression > BlockStatement',
                ],
                SwitchCase: 1,
            },
        ],
        '@typescript-eslint/init-declarations': 'off',
        '@typescript-eslint/keyword-spacing': 'error',
        '@typescript-eslint/lines-between-class-members': [
            'error', {
                exceptAfterOverload: true,
            },
        ],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-duplicate-imports': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-extra-parens': [
            'error',
            'all',
            {
                enforceForArrowConditionals: false,
                ignoreJSX: 'multi-line',
                nestedBinaryExpressions: false,
            },
        ],
        '@typescript-eslint/no-extra-semi': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-loss-of-precision': 'error',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            { ignoreRestSiblings: true },
        ],
        '@typescript-eslint/no-use-before-define': [
            'error', {
                enums: false,
                functions: false,
                typedefs: false,
            },
        ],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        '@typescript-eslint/space-infix-ops': 'error',

        // React
        'react/boolean-prop-naming': ['error', { validateNested: true }],
        'react/button-has-type': 'error',
        'react/default-props-match-prop-types': 'error',
        'react/destructuring-assignment': 'off',
        'react/display-name': 'off',
        'react/forbid-component-props': 'error',
        'react/forbid-dom-props': 'off',
        'react/forbid-elements': 'off',
        'react/forbid-foreign-prop-types': 'error',
        'react/forbid-prop-types': 'error',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-child-element-spacing': 'error',
        'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react/jsx-curly-newline': ['error', 'consistent'],
        'react/jsx-curly-spacing': [
            2,
            {
                when: 'never',
                allowMultiline: true,
                children: true,
            },
        ],
        'react/jsx-equals-spacing': [2, 'never'],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-handler-names': 'error',
        'react/jsx-indent': ['error', 4, { checkAttributes: true, indentLogicalExpressions: true }],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-key': ['error', { checkFragmentShorthand: true }],
        'react/jsx-max-depth': 'off',
        'react/jsx-max-props-per-line': ['error', { maximum: 2, when: 'always' }],
        'react/jsx-newline': ['error', { prevent: true }],
        'react/jsx-no-bind': 'error',
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-target-blank': ['error', { allowReferrer: false, enforceDynamicLinks: 'always' }],
        'react/jsx-no-undef': ['error', { allowGlobals: true }],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-props-no-spreading': ['error', { exceptions: ['App', 'Component'] }],
        'react/jsx-sort-default-props': 'error',
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                ignoreCase: true,
                noSortAlphabetically: false,
                reservedFirst: true,
                shorthandFirst: true,
            },
        ],
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'never',
                afterOpening: 'never',
                beforeClosing: 'never',
            },
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/jsx-wrap-multilines': 'off',
        'react/no-access-state-in-setstate': 'error',
        'react/no-adjacent-inline-elements': 'error',
        'react/no-array-index-key': 'off',
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'react/no-redundant-should-component-update': 'error',
        'react/no-render-return-value': 'error',
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-this-in-sfc': 'error',
        'react/no-typos': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unsafe': ['error', { checkAliases: true }],
        'react/no-unused-prop-types': 'error',
        'react/no-unused-state': 'error',
        'react/no-will-update-set-state': ['error', 'disallow-in-func'],
        'react/prefer-es6-class': 'error',
        'react/prefer-read-only-props': 'error',
        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/require-optimization': 'error',
        'react/require-render-return': 'error',
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        'react/sort-comp': 'error',
        'react/sort-prop-types': 'error',
        'react/state-in-constructor': 'error',
        'react/static-property-placement': ['error', 'static public field'],
        'react/style-prop-object': 'error',
        'react/void-dom-elements-no-children': 'error',

        // React Hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        // JSX a11y
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error', {
                components: ['Link'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
    },

    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            rules: {
                'no-undef': 'off',
            },
        },
        {
            files: ['**/*.cjs'],
            parserOptions: {
                sourceType: 'script',
            },
            env: {
                commonjs: true,
                es2020: false,
                es6: true,
            },
            rules: {
                'strict': ['error', 'global'],
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/explicit-member-accessibility': 'off',
                '@typescript-eslint/naming-convention': 'off',
                '@typescript-eslint/no-require-imports': 'off',
                '@typescript-eslint/no-unnecessary-condition': 'off',
                '@typescript-eslint/no-unsafe-argument': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/restrict-template-expressions': 'off',
            },
        },
        {
            files: ['**/*.tsx'],
            rules: {
                '@typescript-eslint/naming-convention': [
                    'error',
                    ...baseNamingConvention,
                    {
                        selector: 'variable',
                        format: ['PascalCase', 'camelCase'],
                        modifiers: ['const'],
                    },
                ],
            },
        },
    ],
};

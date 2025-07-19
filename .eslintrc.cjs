module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:i18next/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [ '@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'i18next' ],
    rules: {
        // Основные правила форматирования
        'semi': [ 'error', 'always' ], // Точки с запятой обязательны
        'comma-dangle': [ 'error', 'always-multiline' ], // Запятые в конце многострочных объектов/массивов
        'quotes': [ 'error', 'single' ], // Одиночные кавычки для JS/TS
        'jsx-quotes': [ 'error', 'prefer-double' ], // Двойные кавычки для JSX атрибутов
        'object-curly-spacing': [ 'error', 'always' ], // Пробелы внутри объектов { foo: bar }
        'array-bracket-spacing': [ 'error', 'always' ], // Пробелы внутри массивов [ 1, 2 ]
        'eol-last': [ 'error', 'always' ], // Пустая строка в конце файла
        'max-len': ['error', { code: 120,  ignoreComments: true }],

        // Отступы (4 пробела)
        'indent': [ 'error', 4, { 'SwitchCase': 1 } ],
        'react/jsx-indent': [ 'error', 4 ],
        'react/jsx-indent-props': [ 'error', 4 ],

        // React правила
        'react/react-in-jsx-scope': 'off',
        'react/jsx-uses-react': 'off',
        'react/jsx-curly-spacing': ['error', {
            "when": "always",
            "children": true,
            "spacing": {
                "objectLiterals": "always"
            }
        }],
        
        // TypeScript правила
        '@typescript-eslint/no-unused-vars': 'warn',

        // i18next
        "i18next/no-literal-string": ['error', { "onlyAttribute": [ '' ] }]
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            }
        }
    ]
};

import globals from "globals"
import pluginJs from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"

export default [
    pluginJs.configs.recommended,
    {
        ignores: ["dist/", "*.json"], // отключение проверок для папок
    },
    {
        // определение стандарта и парсинга
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: "module",
            globals: globals.browser,
        },
    },
    {
        // files: ['src/**/*.js'],
        rules: {
            indent: ["error", 4], // отступы, авто
            semi: ["error", "always"], // точка с запятой, авто
            "no-unused-vars": "off", // не испоьзуемые переменные
            "no-console": "off", // console.log
            "no-var": "error",
        },
    },
    {
        files: ["*.config.*"], // правила для конфигов
        rules: {
            "no-underscore-dangle": ["off"], // двойное подчеркивание перед/после переменной
            "import/no-extraneous-dependencies": "off", // импорт из дев-зависимостей
        },
    },
    {
        plugins: { stylistic },
        rules: {
            "stylistic/max-len": ["error", { code: 120 }],
            "stylistic/quotes": ["error", "single"],
            "stylistic/array-bracket-spacing": ["error", "always"],
            "stylistic/array-bracket-newline": [
                "error",
                { multiline: true, minItems: 2 },
            ],
            "stylistic/object-curly-spacing": ["error", "always"],
            "stylistic/object-curly-newline": [
                "error",
                { ObjectExpression: { multiline: true, minProperties: 2 } },
            ],
            "stylistic/no-multi-spaces": [
                "error",
                {
                    exceptions: {
                        Property: false,
                        BinaryExpression: true,
                        VariableDeclarator: true,
                        ImportDeclaration: true,
                    },
                },
            ],

            "stylistic/key-spacing": ["error", { mode: "strict" }],
            "stylistic/no-trailing-spaces": "error",
            "stylistic/no-multiple-empty-lines": ["error", { max: 1, maxBOF: 1 }],
        },
    },
]

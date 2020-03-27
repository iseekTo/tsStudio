/**
 * @create in 2020/03/27
 * @author lyb
 * more info https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
 */

module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    // extends: [
    //     'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    // ],
    parserOptions: {
        ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
    overrides: [
        {
            files: "**/*.ts",
            extends: [
                "plugin:@typescript-eslint/recommended"
            ],
        }
    ],

}
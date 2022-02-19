module.exports = {
    extends: ['plugin:prettier/recommended', 'plugin:react/recommended'],
    plugins: ['react-hooks'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    env: {
        browser: true,
		},
		rules: {
			"react/prop-types": 0
		}
    parser: 'babel-eslint',
};

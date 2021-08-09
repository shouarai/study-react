module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"prettier",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: "module",
	},
	plugins: [],
	rules: {
		"react/react-in-jsx-scope": "off",
		"no-undef": "error",
		"react/prop-types": "off",
		"react/jsx-props-no-spreading": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};